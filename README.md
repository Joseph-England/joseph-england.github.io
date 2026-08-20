# Joseph England — e-portfolio

A hand-written static site: plain HTML files and one stylesheet. No build
step, no frameworks, nothing to install beyond what is already on the
computer.

## What each file is

- `index.html` — the Home / About Me page.
- `goals.html` — the Goals page.
- `academics.html` — the Academics page.
- `activities.html` — the Activities page.
- `professional.html` — the Professional page.
- `blog.html` — the blog index; it lists every post.
- `posts/2026-08-05-thoughts-on-academic-success.html` — the first post;
  use it as the template to copy for every new post.
- `assets/style.css` — every colour, font, and spacing decision, in one
  place.
- `assets/fonts/README.md` — how to add the intended typefaces, which is
  optional.

## How to preview the site

The pages link to each other by relative address, so double-clicking
`index.html` opens a working site: the stylesheet loads and every link
goes where it should. That is the quickest way to look at a change.

The same property is what lets the site be published under any repository
name. A repository called `<username>.github.io` publishes at the root of
`https://<username>.github.io/`, while any other repository name publishes
one level down, at `https://<username>.github.io/<repository-name>/`.
Relative addresses are correct in both cases; addresses starting with `/`
would only be correct in the first. So when adding a link or an image,
write the address relative to the page it sits on — from a top-level page
that is `assets/style.css`, and from a file in `posts/` it is
`../assets/style.css`.

To preview over a real web server instead, which matches how GitHub Pages
serves the site:

1. Open a terminal in this folder (the one containing `index.html`).
2. Run: `python3 -m http.server 8000`
3. In a browser, open: `http://localhost:8000`
4. When finished, stop the server by pressing Ctrl-C in the terminal.

Nothing is published by this; the site is only visible on your own
computer.

## The one thing to understand before editing anything

Line breaks in these files do nothing.

Press Enter twenty times in the middle of a sentence and the page still
shows one unbroken paragraph. A browser ignores every line break, tab and
blank line in the file, and squeezes any run of spaces down to a single
space. So the question "where do my line breaks go" has a freeing answer:
nowhere. They are not what makes paragraphs.

What makes a paragraph is the pair of tags wrapped around it. `<p>` means
*start a paragraph here* and `</p>` means *end it here* — that slash is
the only difference between them. Two paragraphs sit apart on the page
because there are two of these wrappers, not because of anything typed
between them.

So one paragraph of writing is one line of the file, sandwiched:

```
      <p>Academic success means different things to different people.</p>
```

Everything between the `>` and the `<` is the text. The six spaces at the
front are only there so the file is pleasant for a human to read; deleting
them would not change the page at all.

**To add a paragraph**, copy a whole line including both wrappers, paste
it underneath, and replace the words in the middle. Nothing else is
needed — the spacing between paragraphs is handled by the stylesheet.

**Curly quotation marks.** The `"` key produces a straight quote, and this
site uses the curly typographic ones. That is all `&ldquo;` and `&rdquo;`
are: codes for the opening and closing curly double quote. `&rsquo;` is
the curly apostrophe, as in `I&rsquo;d`, and `&ndash;` is the short dash
used in a range of years, as in `2024 &ndash; 2026`. Typing the real curly
character directly produces exactly the same result on the page. The codes
are used here only because a straight and a curly quote look nearly
identical in a plain text editor, so the code makes it obvious at a glance
which one is there.

## How to edit a page

Open the relevant `.html` file in a plain text editor and change the words
between the tags. Every page is already filled in, so there is nothing to
set up.

Leave anything inside `<` angle brackets `>` alone, apart from adding a
paragraph as described above. The block at the top of each file and the
row of navigation links are identical on every page; they are what make a
page look and behave like the rest of the site.

## How to add a blog post

A new post touches two files: the post itself, and `blog.html`, which is
the list visitors browse. Nothing updates automatically, so the list has
to be added to by hand.

**Be aware that the date gets typed in five separate places.** That sounds
worse than it is, but missing one is the easiest mistake to make here, so
each is called out below. Throughout, the example is a post written on
3 November 2026 titled "My first quarter".

### Step 1 — make the file

Copy `posts/2026-08-05-thoughts-on-academic-success.html` and rename the
copy, date first, then a few words joined by hyphens:

```
posts/2026-11-03-my-first-quarter.html
```

**Date, place 1 of 5.** Keep the year-month-day order with no spaces, so
the folder always sorts oldest to newest on its own.

### Step 2 — change the title, in two places

Near the top of the copy, change the browser tab title, keeping the name
after the colon:

```
  <title>My first quarter: Joseph England</title>
```

Further down, change the heading readers actually see:

```
      <h1>My first quarter</h1>
```

### Step 3 — change the date

Find this line:

```
      <p class="post-meta"><time datetime="2026-08-05">5 August 2026</time></p>
```

The date appears twice on it, written two different ways, and **both must
be changed**:

```
      <p class="post-meta"><time datetime="2026-11-03">3 November 2026</time></p>
                                           ^^^^^^^^^^  ^^^^^^^^^^^^^^^
                                           place 2 of 5   place 3 of 5
```

The one inside the quotation marks is the version computers read — search
engines and screen readers use it — and it has to stay as year-month-day
digits. The one after it is the version people read, so the month is
spelled out. Spelling it out avoids the real ambiguity of `3/11/2026`,
which means November in Britain and March in America.

### Step 4 — write the post

Replace the paragraphs between `<article>` and `</article>` with the new
writing, one `<p>...</p>` wrapper per paragraph, as described at the top
of this file. Leave the heading and the date line where they are.

### Step 5 — add the post to the list

Open `blog.html` and find the list of posts. Copy an existing two-line
entry, paste the copy **above** the others so the newest post is first,
and edit it:

```
        <li><time datetime="2026-11-03">3 November 2026</time>
          <a href="posts/2026-11-03-my-first-quarter.html">My first quarter</a></li>
```

The date appears twice again here, the same two ways as before — **places
4 and 5 of 5** — and the file name in the middle has to match the file
made in step 1 exactly, including the `.html` at the end. If a link ever
leads to a "page not found", a typo here is the first thing to check.

There is also a commented-out template just above the list in `blog.html`
showing the same two lines with blanks to fill in. Either approach works.

### Step 6 — check it

Double-click `index.html`, click through to Blog, and confirm the new post
appears at the top of the list and that clicking it opens the post. That
catches every mistake described above, in about ten seconds.

## How to change colours, fonts, or spacing

Open `assets/style.css` and edit the `:root` block at the top. Every
colour, size, typeface, and spacing step on the site is defined there,
each with a comment naming its job. Nothing below that block needs to be
touched.

## Adding the intended typefaces

See `assets/fonts/README.md`. The site looks correct without them.

## Mathematical notation

If mathematical notation is ever wanted, self-host a mathematical
typesetting library under `assets/` and add its includes then; none is
bundled now because no page needs one yet.
