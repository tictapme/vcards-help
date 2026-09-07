#!/usr/bin/env python3
"""Export the public TicTAP Help Academy shelves from BookStack."""

from __future__ import annotations

import html
import re
import ssl
import time
from urllib.error import HTTPError
from pathlib import Path
from urllib.parse import urljoin, urlparse
from urllib.request import Request, urlopen


BASE_URL = "https://help.tictapcards.com"
OUTPUT_ROOT = Path("academy")
SHELVES = {
    "es": "aprende-a-usar-vcards",
    "en": "learn-to-use-vcards",
}


def fetch(url: str) -> bytes:
    request = Request(url, headers={"User-Agent": "TicTAP-Academy-Exporter/1.0"})
    for attempt in range(6):
        try:
            with urlopen(request, timeout=60, context=ssl._create_unverified_context()) as response:
                return response.read()
        except HTTPError as error:
            if error.code != 429 or attempt == 5:
                raise
            retry_after = int(error.headers.get("Retry-After", "60"))
            print(f"Rate limited while fetching {url}; waiting {retry_after}s", flush=True)
            time.sleep(retry_after)


def get_links(page: str, prefix: str) -> list[str]:
    links = []
    for raw_url in re.findall(r'href="([^"]+)"', page):
        url = html.unescape(raw_url)
        if url.startswith(prefix) and url not in links:
            links.append(url)
    return links


def slug_from_url(url: str) -> str:
    return urlparse(url).path.rstrip("/").split("/")[-1]


def clean_markdown(markdown: str) -> str:
    markdown = markdown.replace("\r\n", "\n").replace("\r", "\n")
    return markdown.rstrip() + "\n"


def write_text(path: Path, content: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content, encoding="utf-8")


def export_shelf(language: str, shelf_slug: str) -> tuple[int, int]:
    shelf_url = f"{BASE_URL}/shelves/{shelf_slug}"
    shelf_html = fetch(shelf_url).decode("utf-8")
    book_prefix = f"{BASE_URL}/books/"
    books = get_links(shelf_html, book_prefix)

    shelf_dir = OUTPUT_ROOT / language / shelf_slug
    shelf_lines = [f"# {language.upper()} Academy\n", f"Source: {shelf_url}\n", "## Books\n"]
    page_count = 0

    for book_url in books:
        book_slug = slug_from_url(book_url)
        book_html = fetch(book_url).decode("utf-8")
        page_prefix = f"{book_url}/page/"
        pages = get_links(book_html, page_prefix)
        book_title_match = re.search(r"<title>(.*?)\s+\|", book_html, re.S)
        book_title = html.unescape(book_title_match.group(1).strip()) if book_title_match else book_slug
        book_dir = shelf_dir / book_slug
        book_lines = [f"# {book_title}\n", f"Source: {book_url}\n", "## Pages\n"]

        for page_url in pages:
            page_slug = slug_from_url(page_url)
            markdown_url = f"{page_url}/export/markdown"
            markdown_path = book_dir / f"{page_slug}.md"
            if markdown_path.exists():
                markdown = markdown_path.read_text(encoding="utf-8")
            else:
                markdown = clean_markdown(fetch(markdown_url).decode("utf-8"))
                write_text(markdown_path, markdown)
                time.sleep(15)
            page_title = markdown.splitlines()[0].removeprefix("# ").strip() or page_slug
            book_lines.append(f"- [{page_title}]({page_slug}.md)\n")
            page_count += 1
            time.sleep(0.35)

        write_text(book_dir / "README.md", "".join(book_lines))
        shelf_lines.append(f"- [{book_title}]({book_slug}/README.md)\n")

    write_text(shelf_dir / "README.md", "".join(shelf_lines))
    return len(books), page_count


def main() -> None:
    totals = []
    for language, shelf_slug in SHELVES.items():
        totals.append((language, *export_shelf(language, shelf_slug)))
    for language, books, pages in totals:
        print(f"{language}: {books} books, {pages} pages")


if __name__ == "__main__":
    main()
