FROM node:current-alpine
WORKDIR /
COPY . /
RUN npm install
EXPOSE 5000
CMD ["node", "server.js"]