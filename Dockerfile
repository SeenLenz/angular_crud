FROM node:23-alpine3.20 AS node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
FROM httpd
COPY --from=node /app/dist/CRUD_Angular_helicopters/browser /usr/local/apache2/htdocs

FROM node:23-alpine3.20
WORKDIR /db
COPY helicopters.json .
RUN npm install -g json-server
CMD ["json-server", "helicopters.json", "--host", "0.0.0.0", "--port", "3000"]