window.addEventListener("hashchange",function(event){
    document.getElementById('react-content').innerHTML=getParam();
});

window.addEventListener("load",function(event){
    document.getElementById('react-content').innerHTML=getParam();
});

function getParam() {
    var str = window.location.hash;

    if (str.indexOf('#') !== -1) {
        var paths = str.split('/');
        return '传过来的参数是:' + paths[1];
    }
}