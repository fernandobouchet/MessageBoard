var express = require('express');
var router = express.Router();
const moment = require('moment');

const messages = [
  {
    user: 'Fernando',
    text: 'Hi there!',
    added: moment().format('LLL'),
  },
  {
    user: 'Fernando',
    text: 'This is a mini-project to practice nodeJS & Express',
    added: moment().format('LLL'),
  },
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
  let date = moment().format('LLL');
  messages.push({
    user: userName,
    text: message,
    added: date,
  });
  res.redirect('/');
});

module.exports = router;
