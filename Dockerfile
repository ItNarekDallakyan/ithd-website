FROM node:20-alpine

RUN apk add --no-cache libc6-compat bash curl

WORKDIR /app

COPY package.json yarn.lock* ./
RUN yarn install --frozen-lockfile

COPY . .

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# 🔥 THIS IS WHAT YOU MISSED
RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]