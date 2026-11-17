# Sobhan Hadikhah — Portfolio

Personal portfolio built with Next.js 16, Tailwind CSS v4, shadcn/ui and Magic UI.
It is exported as a **fully static site**, so it can be hosted on cPanel (Apache) or any static host with no Node.js server.

## Edit the content

All content lives in one file: [`src/data/resume.tsx`](./src/data/resume.tsx).

Before your first deploy:

1. Set `url` to your real domain (for example `https://sobhanhadikhah.ir`). It is used for canonical URLs, `sitemap.xml`, `robots.txt` and Open Graph tags.
2. (Optional) Add your photo as `public/me.png` and set `avatarUrl: "/me.png"`.
3. (Optional) Add Google Search Console verification in `src/app/layout.tsx` (`verification`).

## Develop

```bash
pnpm install
pnpm dev        # http://localhost:3000
```

## Build the static site

```bash
pnpm build      # writes the static site to ./out
pnpm preview    # serve ./out locally to check it
```

## Deploy to cPanel

1. Run `pnpm build`.
2. Zip the **contents** of `out/` (not the folder itself). Make sure hidden files are included, because `.htaccess` is required.
   ```bash
   cd out && zip -r ../site.zip . && cd ..
   ```
3. In cPanel → **File Manager** → `public_html/`, upload `site.zip` and **Extract** it.
4. If File Manager hides dotfiles, enable *Settings → Show Hidden Files* and confirm that `.htaccess` is there.
5. Once SSL is active, uncomment the HTTPS redirect in `.htaccess` (source: `public/.htaccess`).

`.htaccess` provides the custom 404 page, security headers, gzip and cache rules.

## SEO

- Metadata, Open Graph and Twitter cards are set in `src/app/layout.tsx`.
- A JSON-LD `Person` schema is in `src/app/page.tsx`.
- `sitemap.xml` and `robots.txt` are generated from `src/app/sitemap.ts` and `src/app/robots.ts`.
- The Open Graph image is rendered at build time by `src/app/opengraph-image.tsx`.

## License

MIT. Based on the open-source portfolio template by Dillion Verma.
