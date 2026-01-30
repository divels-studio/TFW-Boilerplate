FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install --no-audit --no-fund

COPY . .

ENV NODE_ENV=production
ENV TFW_DOCS_PORT=3001

EXPOSE 3001

CMD ["sh", "-lc", "npm run build && npm run start -- -p 3001"]

