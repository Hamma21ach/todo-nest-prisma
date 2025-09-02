# ---------- Base ----------
FROM node:20-alpine AS base
WORKDIR /usr/src/app
COPY package*.json ./

# Install OpenSSL and other dependencies
RUN apk add --no-cache openssl

# ---------- Development ----------
FROM base AS development
RUN npm ci
COPY . .
EXPOSE 3000
CMD ["npm", "run", "start:dev"]

# ---------- Build ----------
FROM base AS build
RUN npm ci
COPY . .
RUN npm run build

# ---------- Production ----------
FROM node:20-alpine AS production
WORKDIR /usr/src/app
ENV NODE_ENV=production
RUN apk add --no-cache openssl
COPY package*.json ./
RUN npm ci --omit=dev
COPY --from=build /usr/src/app/dist ./dist
COPY --from=build /usr/src/app/prisma ./prisma
EXPOSE 3000
CMD ["node", "dist/main.js"]
    