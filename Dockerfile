FROM node:21-alpine

RUN mkdir -p /var/www/node_modules &&\ 
    chown -R node:node /var/www

WORKDIR /var/www

USER node

COPY --chown=node:node . .

CMD [ "npm", "start" ]