# Docker Hub: rishithkumar/tictactoe-frontend

Image: rishithkumar/tictactoe-frontend

Overview
- This image builds the Vite + React frontend inside a Node container and serves the production build with the `serve` static server.
- Base image: `node:latest` (single-stage build). The Dockerfile runs `npm ci`, `npm run build`, installs `serve` globally, and starts `serve -s -l 8080 dist`.
- Because it's a single-stage Node-based image, the resulting image contains the build tools and node runtime.

Runtime details
- Exposed port: `8080` (the container entrypoint runs the static `serve` on port 8080).
- Entrypoint: `serve -s -l 8080 dist` — the container serves the `dist` directory produced by `npm run build`.

Quick usage
- Pull the image:

  docker pull rishithkumar/tictactoe-frontend:latest

- Run the container (map host port 8080):

  docker run --rm -p 8080:8080 rishithkumar/tictactoe-frontend:latest

Build and push (local)
- Build locally:

  docker build -t rishithkumar/tictactoe-frontend:local .

- Tag and push to Docker Hub:

  docker tag rishithkumar/tictactoe-frontend:local rishithkumar/tictactoe-frontend:latest
  docker push rishithkumar/tictactoe-frontend:latest

CI/CD notes
- Recommended: build the production assets (`npm run build`) inside the CI, then build and push the Docker image with proper semantic tags (e.g., `v1.2.3`, commit SHA, `latest`). Use `DOCKERHUB_USERNAME` and `DOCKERHUB_TOKEN` (or GHCR/GitHub Packages credentials) as secrets in your CI.

Recommendations
- For smaller, production-optimized images, consider a multi-stage build that uses a lightweight static server image (e.g., `nginx:alpine`) to serve the `dist` directory. This removes Node and build dependencies from the final image.
- Verify the production port mapping: this Dockerfile serves on `8080`, not the Vite dev default `5173`.

Examples
- Docker Hub tags: `latest`, `vX.Y.Z`, and commit SHA (e.g., `a1b2c3d`).
- Example run (background):

  docker run -d -p 8080:8080 --name ttt-frontend rishithkumar/tictactoe-frontend:latest


