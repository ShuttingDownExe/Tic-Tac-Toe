# Tic-Tac-Toe (client)

Overview
- This is a Vite + React single-page application (SPA) located at the project root.

Key files
- `package.json` — project metadata and scripts (`dev`, `build`, `preview`).
- `vite.config.js` — Vite configuration; dev server host/port can be set here.
- `Docker/Dockerfile` — multi-stage Dockerfile: builds static assets with Node/Vite and serves them with nginx.
- `Docker/start.sh` — (optional) runtime script that can emit `env-config.js` when present.
- `Docker/nginx/default.conf` — nginx SPA configuration used by the container runtime.

How the project is built and served
- Build step (produces `dist`):

  ```bash
  npm ci
  npm run build
  ```

- Container (production) — single image that serves prebuilt static files with nginx:

  Build the image (run from project root):

  ```bash
  docker build -t tic-tac-toe:latest -f Docker/Dockerfile .
  ```

  Run the container (listen on host port 80):

  ```bash
  docker run -d --name tic-tac-toe -p 80:80 tic-tac-toe:latest
  ```

Development (hot-reload)
- To develop locally with Vite's dev server (hot reload):

  ```bash
  npm install
  npm run dev
  ```

- If you prefer to run dev inside a container (mounting the workspace):

  ```bash
  docker run --rm -it -p 5173:5173 -v "$PWD":/app -w /app node:lts-alpine \
    sh -c "npm install --silent && npm run dev -- --host 0.0.0.0"
  ```

Notes about runtime configuration
- This project currently does not require or use any runtime environment variables such as `VITE_API_URL` or `NODE_ENV`.
- The Docker runtime previously included an optional `start.sh` which writes `env-config.js` from container environment variables; you may remove or ignore that file if you don't need runtime injection.
- Recommended approach for API calls:
  - If your frontend and backend are hosted on the same origin, use relative paths (for example, `fetch('/api/...')`).
  - If your backend is on a different origin and you don't want runtime env injection, either hardcode the backend base URL in code or provide configuration via a file you manage outside the image.

CORS and backend
- If your backend is on a different origin (e.g. a .NET API on another host/port), enable and configure CORS on the backend so the browser can call it.

Where to change things
- Add or edit Vite dev server settings in `vite.config.js` if you need a specific dev port.
- Edit `Docker/Dockerfile` or `Docker/nginx/default.conf` to change how the runtime serves the app.

Troubleshooting
- If you map host port 80 to a container and the host blocks privileged ports, run the container with sufficient permissions or map another port (e.g. `-p 8080:80`).
- To inspect the built static files inside a running container:

  ```bash
  docker exec -it tic-tac-toe ls -al /usr/share/nginx/html
  docker exec -it tic-tac-toe cat /usr/share/nginx/html/index.html
  ```

If you want, I can also:
- remove the optional runtime env injection files (`Docker/start.sh` and `Docker/nginx/default.conf` changes), or
- add a small `src/config.js` helper that centralizes how the app resolves its API base URL.

---
Created and maintained by your project assistant.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
