FROM node:lts-alpine
WORKDIR /app
COPY package*.json ./
COPY client/package*.json  client/
RUN npm install --prefix client --omit=dev
COPY server/package*.json server/
RUN npm install --prefix server --omit=dev
COPY server/ server/
COPY client/ client/
EXPOSE  5000
EXPOSE 3009
CMD ["sh", "-c", "npm run start --prefix server & npm start --prefix client"]

