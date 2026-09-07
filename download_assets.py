#!/usr/bin/env python3
"""Download image assets referenced by the Academy Markdown files."""

from __future__ import annotations

import re
import ssl
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path
from urllib.request import Request, urlopen


BASE_URL = "https://help.tictapcards.com"
CONTENT_ROOT = Path("academy")
ASSET_ROOT = Path("static")
URL_PATTERN = re.compile(r"https://help\.tictapcards\.com/uploads/[^)\"\s>]+")
SSL_CONTEXT = ssl._create_unverified_context()


def collect_urls() -> list[str]:
    urls = set()
    for path in CONTENT_ROOT.rglob("*.md"):
        urls.update(URL_PATTERN.findall(path.read_text(encoding="utf-8")))
    return sorted(urls)


def download(url: str) -> tuple[str, bool]:
    relative_path = url.removeprefix(BASE_URL).split("?", 1)[0]
    destination = ASSET_ROOT / relative_path.removeprefix("/")
    destination.parent.mkdir(parents=True, exist_ok=True)
    if destination.exists() and destination.stat().st_size > 0:
        return url, False

    request = Request(url, headers={"User-Agent": "TicTAP-Academy-Asset-Downloader/1.0"})
    with urlopen(request, timeout=90, context=SSL_CONTEXT) as response:
        destination.write_bytes(response.read())
    return url, True


def main() -> None:
    urls = collect_urls()
    downloaded = 0
    with ThreadPoolExecutor(max_workers=6) as executor:
        jobs = [executor.submit(download, url) for url in urls]
        for job in as_completed(jobs):
            url, was_downloaded = job.result()
            downloaded += was_downloaded
            print(f"{'downloaded' if was_downloaded else 'exists'} {url}", flush=True)

    for path in CONTENT_ROOT.rglob("*.md"):
        content = path.read_text(encoding="utf-8")
        content = re.sub(r"https://help\.tictapcards\.com/uploads/", "/uploads/", content)
        path.write_text(content, encoding="utf-8")
    print(f"{len(urls)} unique assets, {downloaded} downloaded")


if __name__ == "__main__":
    main()
