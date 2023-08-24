FROM node:16.15-alpine3.14 as build
WORKDIR /app
COPY . .
RUN npm i
RUN ["npm", "run", "build"]

FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY --from=build /app/.nginx/nginx.conf /etc/nginx/sites-enabled/default
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]