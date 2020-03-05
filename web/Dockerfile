FROM node:12.2.0 as node
# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build:prod

FROM nginx:latest
COPY --from=node /app/dist/ /usr/share/nginx/html/