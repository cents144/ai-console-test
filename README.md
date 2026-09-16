# ai-console-test

A basic Vue 3 wiki for testing LLM control setup.

## Features

- Browse a list of wiki articles
- View individual article pages
- Client-side routing via Vue Router (hash history)
- Minimal, clean styling

## Project structure

```
src/
  data/pages.js       # Wiki page data (title + content)
  router/index.js     # Vue Router configuration
  views/
    WikiHome.vue      # Article list
    WikiPage.vue      # Single article view
    NotFound.vue      # 404 fallback
  App.vue             # Root layout
  main.js             # App entry point
index.html            # HTML entry point
vite.config.js        # Vite configuration
```

## Setup

```bash
npm install
npm run dev      # start dev server
npm run build    # production build
npm run preview  # preview production build
```
