/*
 * Serve JSON to our AngularJS client
 */

exports.name = function (req, res) {
  res.json({
  	name: '爆肝王'
  });
};

exports.occupations = function (req, res) {
  var occupations = [
    {id:0, text:'路人甲'},
    {id:1, text:'PTT鄉民'},
    {id:2, text:'大學生'},
    {id:3, text:'公務人員'}];

  res.json({
  	occupations: occupations
  });
};