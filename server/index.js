
const path = require('path');
const express = require('express');
const PORT = process.env.PORT || 31415;
var app = express();

app.use(express.json());
// figure out heroku
const morgan = require("morgan");
const bodyParser = require("body-parser");
// app.use(bodyParser.json())
app.use(require('./routes/profile'));
app.use(require('./routes/tweet'));
app.use(require('./routes/feed'));

app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.get("/bacon", (req, res) => {
  res.status(200).json({ greeting: "hello" });
})


const server = app.listen(PORT, function() {
  console.info('🌍 Listening on port ' + server.address().port);
});
