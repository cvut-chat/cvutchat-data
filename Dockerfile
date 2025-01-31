FROM node:current-alpine
WORKDIR /
COPY . /
RUN npm install
CMD ["node", "server.js"]