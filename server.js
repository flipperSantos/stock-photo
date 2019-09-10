const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('./dist/stock-photo-test'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/*', function (req, res) {

  res.sendFile(path.join(__dirname, '/dist/stock-photo-test/index.html'));
});

app.listen(process.env.PORT || 8080);