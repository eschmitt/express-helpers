var _ = require('preludejs');

//+ render :: Response -> String -> JSON -> IO
var render = function (res, template, data) {
      res.render(template, data);
    }.autoCurry()

//+ redirect :: Response -> String -> IO
  , redirect = function (res, url) {
      res.redirect(url);
    }

//+ redirectOrSendError :: Response -> String -> String -> (Error -> IO)
  , redirectOrSendError = function (res, url, msg) {
      return function (err) {
        var error_msg = msg || err.msg || err;
        if (err) {
          console.log(err);
          res.send(500, error_msg);
        } else {
          res.redirect(url);
        }
      }
    }
  ;

module.exports = {
  render: render
, redirect: redirect
, redirectOrSendError: redirectOrSendError
}
