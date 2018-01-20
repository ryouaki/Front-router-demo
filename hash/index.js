window.addEventListener("hashchange", function (event) {
  doRoute(document.getElementById('content'));
});

window.addEventListener("load", function (event) {
  doRoute(document.getElementById('content'));
});

function doRoute(el, state) {
  var currentRoute = parseUrl();
  var config = window.router.config;


}

function parseUrl() {
  var hashDeatail = location.hash.split("?"),
    hashName = hashDeatail[0].split("#")[1],//路由地址
    params = hashDeatail[1] ? hashDeatail[1].split("&") : [],//参数内容
    query = {};
  for (var i = 0; i < params.length; i++) {
    var item = params[i].split("=");
    query[item[0]] = item[1]
  }
  return {
    path: hashName,
    query: query
  }
}
