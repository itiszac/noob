# FROM node as builder

# # A directory within the virtualized Docker environment
# # Becomes more relevant when using Docker Compose later
# WORKDIR /usr/src/app
# # Copies package.json and package-lock.json to Docker environment
# COPY ./package*.json ./
# # Installs all node packages
# RUN npm install
# # Copies everything over to Docker environment
# COPY . .

# EXPOSE 4000

# CMD ["npm", "run", "dev:webpack"]

FROM node AS base

FROM base AS deps
WORKDIR /deps
COPY package*.json ./
RUN npm install

FROM base AS builder
WORKDIR /builder
COPY --from=deps /deps/node_modules ./node_modules
COPY . .
RUN npm run build

FROM base AS runner
ENV NODE_ENV production
ENV PORT 4000

COPY --from=builder /builder/node_modules ./node_modules
COPY --from=builder /builder/package.json ./package.json

EXPOSE ${PORT}
CMD [ "npm", "start" ]