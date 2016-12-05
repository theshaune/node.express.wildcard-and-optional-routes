let express = require('express')
  , router  = express.Router()
  , path    = require('path');

/* GET users listing. */
router.get('/*?', function(req, res, next) {
  
  /* Retrive optional paramater */
  let user = (path.basename(req.path) ? path.basename(req.path) : 'not set, please try the following url `users/foo/bar/baz`.');
  
  /* send a response to the user */
  res.send('Optional wildcard param is: '+user);
});

module.exports = router;
