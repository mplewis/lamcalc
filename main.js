var ApiBuilder = require('claudia-api-builder')
var math = require('mathjs')

var api = new ApiBuilder()

function jsonResponse(data, status = 200) {
  return new api.ApiResponse(data, {'Content-Type': 'application/json'}, status)
}

api.post('/calc', function (req) {
  return jsonResponse({result: math.eval(req.body.expr)})
})

module.exports = api;
