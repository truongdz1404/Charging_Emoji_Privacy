# Charging Emoji — Privacy Policy site

A minimal static page hosting the Privacy Policy for **Charging Emoji: Battery Effect**
(`com.dreek.emojicharge`), so it has a real `https://` URL for the Google Play Console
"App content" section.

The text in `src/App.tsx` matches the in-app Privacy Policy screen — update both if the
app's data practices change.

## Local dev

```bash
npm install
npm run dev
```

## Deploy to Vercel

```bash
npm install -g vercel   # if you don't have it yet
vercel                  # first deploy, follow the prompts
vercel --prod           # promote to your production URL
```

Or connect this folder as its own Vercel project via the Vercel dashboard (Import
Project → point it at this directory). No environment variables or backend needed —
it's a static Vite build.
