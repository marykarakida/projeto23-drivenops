FROM node:16.14

WORKDIR /app

COPY . .
RUN npm i 
RUN npm run build 

RUN mkdir -p /var/www/html 
RUN mv build/* /var/www/html

WORKDIR /

RUN rm -rf /app