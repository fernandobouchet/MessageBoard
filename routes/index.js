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

router.get('/new', function (req, res, next) {
  res.render('form');
});

router.post('/new', (req, res) => {
  let userName = req.body.userName;
  let message = req.body.message;
  let date = new Date();
  messages.push({
    user: userName,
    text: message,
    added: date,
  });
  res.redirect('/');
});

module.exports = router;
