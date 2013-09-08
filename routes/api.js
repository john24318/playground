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
  	occupations: occupations,
    current_id: 3
  });
};

exports.categories = function (req, res) {
  var categories = [
    {id:0, text:'色情', class:'warning', comment:'牽涉色情等字眼'},
    {id:1, text:'髒話', class:'danger', comment:'牽涉髒話等字眼'},
    {id:2, text:'政治', class:'default', comment:'牽涉政治等字眼'},
    {id:3, text:'代名詞', class:'default', comment:'牽涉你我他等字眼'}];

  res.json({
    categories: categories
  });
};

exports.sentences = function (req, res) {
  var sentences = [
    {id:0, text:'直述句', comment:'直述句句型'},
    {id:1, text:'詢問句', comment:'詢問句句型'},
    {id:2, text:'引述句', comment:'引述句句型'}
  ]

  res.json({
    sentences: sentences
  });
}

exports.dictionary = function (req, res) {
  var unsure = [
    {id:21, text:'aaa', cat:null, stable:0},
    {id:22, text:'asd', cat:null, stable:0}
  ]

  var noun = [
    {id:0, text:'做愛', cat:0, stable:1},
    {id:1, text:'魚水之歡', cat:0, stable:0},
    {id:2, text:'幹', cat:1, stable:1},
    {id:3, text:'王八蛋', cat:1, stable:1},
    {id:4, text:'馬英九', cat:2, stable:1},
    {id:5, text:'你', cat:3, stable:1},
    {id:6, text:'我', cat:3, stable:1},
    {id:7, text:'他', cat:3, stable:1}];

  var syntax = [
    {id:0, syntax:'{noun}今天很開心', st:0},
    {id:1, syntax:'{noun}今天開心嗎？', st:1},
    {id:2, syntax:'{noun}曾說過：「光陰似箭」', st:2}
  ]

  var dictionary = {
    unsure: unsure,
    noun: noun,
    syntax: syntax
  }

  res.json({
    dictionary: dictionary
  });
};
