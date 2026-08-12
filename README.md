# LogSuite Website

Static sites for the **LogSuite** app family (GitHub Pages ready).

## Preview

```bash
cd LogSuiteWebSite
python3 -m http.server 8080
```

Open:

- `http://localhost:8080/` — suite landing
- `http://localhost:8080/matterlog/` — MatterLog
- `http://localhost:8080/scribelog/` — ScribeLog
- `http://localhost:8080/api-key.html` — shared BYOK guide

## Layout

| Path | Purpose |
| --- | --- |
| `index.html` | LogSuite series LP |
| `matterlog/` | MatterLog marketing site |
| `scribelog/` | ScribeLog marketing site |
| `api-key.html` | Free Gemini / OpenRouter key guide (all apps) |

## GitHub Pages

Point Pages at the `/LogSuiteWebSite` folder on `main`, **or** sync this folder to a dedicated Pages repo (e.g. [abecheng/WebSite](https://github.com/abecheng/WebSite)) as the site root.

All asset paths are relative so subdirectory deploys work.
