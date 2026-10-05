# Movix — Movie & TV Discovery Web App

**Live Demo:** https://moviewebapp-ten.vercel.app/

Fast, responsive movie/TV discovery UI built with **React + Vite**, **Redux Toolkit**, **React Router** and the **TMDB API**.

Search millions of movies, TV shows and people, browse Trending / Popular / Top Rated, explore with genre + sort filters, and open rich detail pages with backdrop, poster, rating, genres, cast, trailers, recommendations and similar titles.

![React](https://img.shields.io/badge/React-18-blue)
![Vite](https://img.shields.io/badge/Vite-4-purple)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-1.9-red)
![React Router](https://img.shields.io/badge/React_Router-6-green)
![TMDB](https://img.shields.io/badge/API-TMDB-032541)

## Features

- **Hero banner search** — random `movie/upcoming` backdrop, live query → `/search/:query`
- **Home rails** — Trending (day/week switch tabs), Popular, Top Rated
- **Explore** — `/explore/:mediaType` for movie/TV with genre multi-select (`react-select`), sort dropdown, infinite scroll
- **Details page** — `/:mediaType/:id` with backdrop/poster, TMDB rating circle, genres, runtime, overview, top cast with profile images, official videos/trailers in popup player (`react-player`), Recommendations + Similar carousels
- **Search results** — paginated multi-type search with infinite scroll, poster fallback + no-results state
- **Global TMDB config cache** — `/configuration` image base URLs + `/genre/movie/list` + `/genre/tv/list` stored in Redux, reused for posters/backdrops/profiles
- **Performance UX** — lazy-loaded images, skeleton spinners, reusable carousel, content wrapper, SCSS mixins, mobile-responsive header/footer with search overlay
- **404 page** for unmatched routes

## Tech stack

| Layer | Choice |
|---|---|
| UI | React 18, React Router 6, Redux Toolkit + React-Redux 8 |
| Build | Vite 4, @vitejs/plugin-react |
| Data | Axios, TMDB v3 REST (`https://api.themoviedb.org/3/`) |
| UI libs | react-select, react-infinite-scroll-component, react-lazy-load-image-component, react-circular-progressbar, react-player, react-icons, dayjs |
| Styling | SCSS / Sass, custom mixins, CSS variables |

Routes in `src/App.jsx`:

- `/` Home
- `/:mediaType/:id` Details (movie/tv)
- `/search/:query` Search results
- `/explore/:mediaType` Explore movies or TV
- `*` 404

## Getting started

Prerequisites: Node.js 18+ and npm.

```bash
git clone https://github.com/anmoljames/moviewebapp.git
cd moviewebapp
npm install
```

### 1. TMDB API token

1. Create a free account at https://www.themoviedb.org/ → Settings → API → create API key (v3 + v4 read token).
2. Copy the **API Read Access Token (v4 Bearer)**.
3. Create `.env` in project root (see `.env.example`):

```env
VITE_APP_TOKEN=your_tmdb_read_access_token_here
```

`src/utils/api.js` sends it as `Authorization: Bearer <token>` to TMDB.

### 2. Run

```bash
npm run dev      # start Vite dev server
npm run build    # production build to dist/
npm run preview  # preview production build
npm run lint     # eslint js/jsx
```

Open http://localhost:5173.

## Project structure

```
public/movix-logo.png
src/
  App.jsx                 # routes + TMDB configuration/genre bootstrap
  main.jsx  index.scss  mixins.scss
  store/
    store.js
    homeSlice.js          # url {backdrop,poster,profile} + genres
  utils/api.js            # axios fetchAPI(BASE_URL + Bearer token)
  hooks/useFetch.jsx      # data-fetch hook
  components/
    header/ footer/ hero pieces
    carousel/ movieCard/ genres/
    circleRating/ switchTabs/
    lazyLoadImage/ spinner/ videoPopup/ contentWrapper/
  pages/
    home/ heroBanner/ trending/ popular/ topRated/
    details/ detailsBanner/ cast/ videosSection/ carousels/
    explore/ searchResult/ 404/
```

## API reference (TMDB)

Base: `https://api.themoviedb.org/3/`

Used endpoints: `/configuration`, `/genre/movie/list`, `/genre/tv/list`, `/trending/all/day`, `/trending/all/week`, `/movie/upcoming`, `/movie/popular`, `/movie/top_rated`, `/tv/popular`, `/tv/top_rated`, `/discover/movie`, `/discover/tv`, `/search/multi`, `/movie/{id}`, `/tv/{id}`, `/{type}/{id}/credits`, `/{type}/{id}/videos`, `/{type}/{id}/recommendations`, `/{type}/{id}/similar`.

Images: `secure_base_url + w342 (poster) / w1280 (backdrop) / w185 (profile)`.

Docs: https://developer.themoviedb.org/docs

## Notes

- This is a front-end demo. You need your own TMDB token — do not commit real tokens. `.env` is local only; commit `.env.example` instead.
- Data, posters and metadata belong to TMDB / their respective owners.

## Acknowledgements

- Data + images by [TMDB](https://www.themoviedb.org/).
- Built with React, Vite, Redux Toolkit and React Router.
