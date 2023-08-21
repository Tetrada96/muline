FROM node:16.15-alpine3.14
WORKDIR /app
ADD package.json package.json
RUN npm install
COPY . .

EXPOSE 8080
RUN chmod +x startup.sh
ENTRYPOINT sh startup.sh