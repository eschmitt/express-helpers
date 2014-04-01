var _ = require('preludejs');

//+ render :: Response -> String -> JSON -> IO
var render = function (res, template, data) {
      res.render(template, data);
    }.autoCurry()
  ;

module.exports = {
  render: render
}
