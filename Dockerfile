FROM node:20
WORKDIR /app
COPY . .
EXPOSE 8080
RUN npm install
CMD ["npm","start" ]