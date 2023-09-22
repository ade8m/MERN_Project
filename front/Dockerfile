FROM node

WORKDIR /app

COPY . /app
RUN npm install --legacy-peer-deps

EXPOSE 3000
CMD [ "npm","start" ] 