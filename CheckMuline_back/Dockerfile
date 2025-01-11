FROM node:18.20
WORKDIR /app
COPY package.json package.json
RUN npm i
COPY . .

EXPOSE 8080
RUN chmod +x startup.sh
ENTRYPOINT sh startup.sh