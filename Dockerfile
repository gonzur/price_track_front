FROM node:current-alpine as node-base
USER node
WORKDIR /home/node/
COPY --chown=node:node . .
ENV PATH="/home/node/node_modules/.bin:${PATH}"
RUN npm i && $(npm bin)/ng build --prod --output-path=dist
EXPOSE 5000
CMD ["ng","serve","--host","0.0.0.0","--port","5000"]
