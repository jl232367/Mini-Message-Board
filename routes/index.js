var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];
/* GET home page. */
router.get('/', function(req, res, next) {

  
  res.render('index', { title: 'Your Journal', messages: messages });
});

router.post('/new', function(req, res, next) {
  let formInfo = req.body;
  messages.push({text: formInfo.formText, user: formInfo.formName, added: new Date()});
  res.redirect('/');
});

module.exports = router;
