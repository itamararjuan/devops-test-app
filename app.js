var http = require ('http');
var url = require ('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  if (q.name === undefined) {
	q.name = "World";
	}
  var txt = "hello" + " " + q.name ;
  res.end(txt);
}).listen(3000);