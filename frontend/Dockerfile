FROM node:current-bullseye-slim

WORKDIR /app
EXPOSE 8080
RUN apk update && apk upgrade --no-cache
COPY package*.json .
RUN npm ci
COPY . .
RUN npm run build
RUN npm install -g serve
ENTRYPOINT [ "serve", "-s", "-l", "8080", "dist" ]