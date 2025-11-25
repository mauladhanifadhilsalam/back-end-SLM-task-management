# Base runtime: Node 20 on Alpine keeps the image lean for dev and CI
FROM node:20-alpine

# All subsequent paths are relative to this directory
WORKDIR /usr/src/app

# Install dependencies early so this layer is cached unless package files change
COPY package*.json ./

# Prisma needs its schema/migrations available before npm install (postinstall hook)
COPY prisma ./prisma/

RUN npm install

# Copy application source (controllers, services, etc.)
COPY . .

# The Express app listens on 3000 by default
EXPOSE 3000

# Default process mirrors package.json's start script
CMD ["npm", "start", "npm run db:deploy && npm run dev"]
