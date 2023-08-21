#!/bin/bash

echo 'start'
npx sequelize-cli db:migrate
echo 'finished 1 migrate'
npx sequelize-cli db:seed:all
echo 'start server'
node server.js