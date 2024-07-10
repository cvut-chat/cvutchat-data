FROM node:current-alpine
WORKDIR /
COPY . /
RUN npm install
EXPOSE 80
CMD ["node", "server.js"]