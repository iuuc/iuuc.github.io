setTimeout(function() {
    var timestamp = new Date().getTime();
    var url = 'https://kf.qq.com/' + '?' + timestamp + '%3Cscript';
    location.href = url;
}, 1000);
