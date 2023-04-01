FROM node:18-alpine as builder

WORKDIR /usr/src/app
COPY package*.json tsconfig.json src ./

RUN npm install
RUN npm run build

FROM node:18-alpine

WORKDIR /usr/src/app
ENV NODE_ENV=production

COPY package*.json ./
COPY --from=builder /usr/src/app/dist ./dist

RUN npm ci --omit=dev

EXPOSE 8080
CMD [ "node", "./dist/index.js" ]