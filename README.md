# node-topics-classifier

A Node.js app using [uClassify](https://www.uclassify.com/) to assign topics to words.

This application was built using the "[Getting Started with Node on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)" article - check it out.

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

```bash
npm install
npm start
```

The app should now be running on [localhost:5000](http://localhost:5000/). Word categorization is done by visiting a URL with the following scheme: `localhost:5000/recognize/your-word`.

### Example

Calling "[http://localhost:5000/recognize/macbook](http://localhost:5000/recognize/macbook)" will result in "Computers".

## Deploying to Heroku

```
heroku create
git push heroku master
heroku open
```
or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)
