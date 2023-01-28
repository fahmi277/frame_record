FROM node:16-alpine

WORKDIR /frame_record

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD npm run dev