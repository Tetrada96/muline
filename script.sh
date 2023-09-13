#!/bin/bash

# Запросить изменения из удаленного репозитория
git fetch

# Получить имя текущей ветки
current_branch=$(git rev-parse --abbrev-ref HEAD)

# Сравнить локальные и удаленные версии ветки
git_status=$(git status -uno | grep 'is behind' | wc -l)

# Если локальная копия ветки актуальна, вывести сообщение
if [ $git_status -eq 0 ]
then
  echo "Локальная копия ветки "$current_branch" актуальна."
else
  # Если удаленная версия ветки новее, выполнить git pull
  echo "Локальная копия ветки "$current_branch" устарела. Выполняю git pull..."
  git pull
fi
