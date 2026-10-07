# Portfolio site

Plain HTML, CSS and JavaScript. Open the files in any editor; upload the whole folder to any static host (Netlify, GitHub Pages, Vercel, Cloudflare Pages).

## Adding your images

Drop files into `images/` with these exact names and they appear automatically:

| File | Where it shows |
|---|---|
| `images/me.jpg` | Your photo (homepage and About page) |
| `images/about-1.jpg` … `images/about-7.jpg` | The 7 draggable graphics on the About page |

Work page thumbnails: put them in `images/work/` and set `image: "images/work/your-file.jpg"` for that project in `js/projects.js`.

## Editing content

- Projects and categories: `js/projects.js`
- Featured folders, services, process, contact: `index.html`
- Bio: `about.html`
- Colors and fonts: top of `css/styles.css`
- Contact email: search for `hello@yourname.com` in `index.html` and `js/main.js`
