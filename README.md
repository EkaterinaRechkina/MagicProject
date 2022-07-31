# Web-приложение для квеста MagicProject

Сайт разработан  как квест по поиску пропавшей тети Хильды (референс - Сабрина маленькая ведьма). \
Нужно зарегистрироваться, зайти в карты, потом истории, там узнать больше про заклинание поиска, купить \
необходимые магические товары, создать встречу для ковена. \
На главной странице можно найти предсказания, и на странице Команда мы найдем тетю Хильду.  


## Animation, Login and Map

![animation](./readme_gif/animation.gif)

## Shop, Cart, Favourites, My goods

![animation](./readme_gif/shop.gif)

# Стек технологий:

DB: PostgreSQL, Sequelize ORM

Back: Node.js, Express, Sessions, Bcrypt, Cors

Front: React + Redux, Redux Thunk, JavaScript, HTML5, CSS, MUI

# Планы развития:

Создать чат для продавцов и покупателей. \
Развивать магазин. 

# Установка:

В директории 2 папки:

### server/ Отвечает за back-end.

- cd server
- npm i
- npx sequelize db:create
- npx sequelize db:migrate
- npm run dev

### client/ - front-end.

- cd client
- npm i
- npm start
