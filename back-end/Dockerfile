FROM node:16.14

WORKDIR /usr/src

COPY . .
RUN npm i && npm run build 

CMD ["npm", "start"] 