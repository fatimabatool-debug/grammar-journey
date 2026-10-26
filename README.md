# Grammar Journey (frontend only)
React + TypeScript + Vite + Tailwind. No backend; progress, saved lessons and theme are in localStorage.

## Windows setup
1. Install Node.js LTS from https://nodejs.org
2. Extract `grammar-journey.zip`, open the folder, type `cmd` in the address bar, press Enter.
3. `npm install`
4. `npm run dev` then open http://localhost:5173
5. `npm test` (answer checking), `npm run build` (production build in `dist`), `npm run preview`

Deploy `dist` to any static host (Netlify, Vercel, GitHub Pages). Routing uses `#` so no server rules are needed.

## Implemented
Home with sample question, curriculum search/filter, 3 full lessons (14 questions), 2 stories with clickable grammar notes and size control, scripted practice (not AI), dashboard with mistake notebook, dark mode, mobile drawer.
## Not implemented
More lessons/stories, other activity types, Urdu text, local content preview, unit tests, topic search in top bar, read-aloud.
