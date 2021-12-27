FROM node:latest AS build
WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm ci

# add app
COPY . ./

# start app
CMD ["npm", "start"]