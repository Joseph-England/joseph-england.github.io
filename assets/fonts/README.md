# Fonts

The site is designed for two typefaces, both free to self-host under the
SIL Open Font License, version 1.1:

- **Source Serif 4** — body text
- **Source Sans 3** — headings and navigation

Until the files below exist, the site falls back to matching system
typefaces and remains complete. Adding the real files is optional polish.

## Where to obtain them

Download from the official repositories (each release page has a section
of downloadable files):

- Source Serif 4: https://github.com/adobe-fonts/source-serif/releases
- Source Sans 3: https://github.com/adobe-fonts/source-sans/releases

Use the WOFF2 format if the release offers it. If only TTF or OTF files
are offered, a free converter or the Google Fonts download also works —
what matters is ending up with WOFF2 files.

## What to save, and as what

Place exactly these five files in this folder, renaming the downloads to
match (the names must match the stylesheet character for character):

- `SourceSerif4-Regular.woff2`
- `SourceSerif4-Italic.woff2`
- `SourceSerif4-Bold.woff2`
- `SourceSans3-Regular.woff2`
- `SourceSans3-Semibold.woff2`

## Switching the site over

1. Open `assets/style.css`.
2. Find the commented-out block of `@font-face` rules near the top and
   remove the `/*` and `*/` markers around it.
3. In the `:root` block, edit the two `font-family` lines so the new
   faces come first:
   - `--font-body: "Source Serif 4", Charter, ...` (keep the rest of the
     line as it is)
   - `--font-heading: "Source Sans 3", system-ui, ...` (likewise)
