
/**
 * Module dependencies
 */

var express = require('express'),
  routes = require('./routes'),
  api = require('./routes/api'),
  http = require('http'),
  path = require('path'),
  sass = require('node-sass');


var app = module.exports = express();

/**
* Configuration
*/

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.set('view options', {pretty: true});
app.use(express.logger('dev'));
app.use(express.favicon(__dirname + '/public/img/favicon.ico'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.locals.pretty = true
// set sass middleware
app.use(sass.middleware({
  src: __dirname + '/sass',
  dest: __dirname + '/public',
  debug: true
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);

// development only
if (app.get('env') === 'development') {
  app.use(express.errorHandler());
};

// production only
if (app.get('env') === 'production') {
  // TODO
}; 



// Routes
app.get('/', routes.index);
app.get('/admin', routes.admin);
app.get('/partial/:name', routes.partial);

// JSON API
app.get('/api/name', api.name);
app.get('/api/occupations', api.occupations);
app.get('/api/categories', api.categories);
app.get('/api/sentences', api.sentences);
app.get('/api/dictionary/list/:category?', api.dictionary.list);
app.post('/api/dictionary/add/:category/:nid', api.dictionary.add);
app.delete('/api/dictionary/remove/:category/:nid', api.dictionary.remove);
app.put('/api/dictionary/edit/:category/:nid', api.dictionary.edit);

// redirect all others to the index (HTML5 history)
app.get('*', routes.index);

/**
* Start Server
*/

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});