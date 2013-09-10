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
    {id:21, text:'aaa', cat:null},
    {id:22, text:'asd', cat:null}
  ]

  var noun = [
    {id:0, text:'做愛', cat:'0'},
    {id:1, text:'魚水之歡', unsure:'0'},
    {id:2, text:'幹', cat:'1', unsure:'0'},
    {id:3, text:'王八蛋', cat:'1'},
    {id:4, text:'馬英九', cat:'2,3'},
    {id:5, text:'你', cat:'3'},
    {id:6, text:'我', cat:'3'},
    {id:7, text:'他', cat:'3'}];

  var syntax = [
    {id:0, syntax:'{代名詞}今天很開心', stx:0},
    {id:1, syntax:'{noun}今天開心嗎？', stx:1},
    {id:2, syntax:'{政治|代名詞}曾說過：「{直述句}」', stx:2}
  ]

  var statistics = [
    {nid:0, amount:{cat0:100}},
    {nid:1, amount:{cat0:50}},
    {nid:2, amount:{cat0:20, 
                    cat1:100}},
    {nid:3, amount:{cat1:100}},
    {nid:4, amount:{cat2:100,
                    cat3:100}},
    {nid:5, amount:{cat3:100}},
    {nid:6, amount:{cat3:100}},
    {nid:7, amount:{cat3:100}},
    {nid:21, amount:{cat0:0}},
    {nid:22, amount:{cat1:1}}
  ]

  var dictionary = {
    unsure: unsure,
    noun: noun,
    statistics: statistics,
    syntax: syntax
  }

  res.json({
    dictionary: dictionary
  });
};
