var express = require('express');
var router = express.Router();

const messages = [
  { text: 'Hi there!', user: 'Fernando', added: new Date() },
  { text: 'Hi yo!', user: 'Fernando', added: new Date() },
  { text: 'Hi Fer!', user: 'Fernando', added: new Date() },
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages });
});

module.exports = router;
