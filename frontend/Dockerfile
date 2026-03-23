FROM node:latest

WORKDIR /app
EXPOSE 8080
COPY package*.json .
RUN npm ci
COPY . .
RUN npm run build
RUN npm install -g serve
ENTRYPOINT [ "serve", "-s", "-l", "8080", "dist" ]