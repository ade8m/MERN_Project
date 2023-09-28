FROM node

WORKDIR /app
COPY package.json .
RUN npm cache clean --force

RUN npm install
COPY . /app

EXPOSE 3001
CMD [ "npm","start" ] 