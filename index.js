var cors = require('cors');
var express = require('express');
var lru = require('lru-fast');
var unirest = require('unirest');

var categories = new lru.LRUCache(6000);
var credentials = require('./credentials.json');
var port = process.env.PORT || 5000;

function getClosestMatch(map) {
  if (!map) {
    return;
  }

  var keysSorted = Object.keys(map).sort((a, b) => map[a] - map[b]);
  return keysSorted[keysSorted.length - 1];
};

var app = express();
app.set('port', port);
app.use(cors());
app.options('*', cors());

app.get('/', function (request, response) {
  response.send('Hello World!\n');
});

app.listen(app.get('port'), function () {
  console.log(`Node app is running on port "${app.get('port')}".`);
});

app.get('/recognize/:text', function (request, ourResponse) {
  var query = request.params.text;
  var cachedCategory = categories.get(query);
  if (cachedCategory) {
    ourResponse.send(cachedCategory);
  } else {
    var readKey = credentials.uClassify.apiKey.read;
    var url = `https://api.uclassify.com/v1/uClassify/Topics/classify/?readKey=${readKey}&text=${query}`;

    unirest.get(url).end(function (response) {
      var topics = response.body;
      var match = getClosestMatch(topics);
      if (match) {
        categories.put(query, match);
        ourResponse.send(match);
      } else {
        ourResponse.status(404).send('No topic found.');
      }
    });
  }
});
