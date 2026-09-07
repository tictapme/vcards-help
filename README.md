# TicTAP Help Academy

Markdown export of the public TicTAP Help Academy, preserving the BookStack hierarchy:

```text
academy/<language>/<shelf>/<book>/<page>.md
```

Available languages:

- [Español](academy/es/aprende-a-usar-vcards/README.md)
- [English](academy/en/learn-to-use-vcards/README.md)

The public pages were exported using BookStack's Markdown endpoint. `extract_academy.py` can be used to refresh the export; it reuses existing files and respects the server rate limit.
