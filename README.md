# News-App

> Develop a simple News app with the help of NodeJS , Express , EJS and bootstrap with Newsapi

![screenshot](https://github.com/Shubhamdutta2000/News-App/blob/main/screenshot/image.PNG)

## Features

- use Newsapi for getting latest news
- Display latest news articles
- Search news articles

## API Endpoints

| Endpoint            | Functionality                                   |
| ------------------- | ----------------------------------------------- |
| GET `/`             | Get latest news from Newsapi                    |
| POST `/search`      | Search particular news from NewsApi             |
| POST `/category?q=` | Select particular category of news from NewsApi |

## Setup and Build

```
# Clone repo and cd into directory
git clone https://github.com/Shubhamdutta2000/News-App.git
```

```
# Install dependencies
npm install

# Serve in development environment
npm run start-dev

```

## Dependencies used

These are the Dependencies we need to install for our project.

```
express
ejs
body-parser
axios
newsapi
```

### [Preview](https://s-news-app.herokuapp.com/)
