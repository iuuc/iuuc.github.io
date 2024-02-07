function loadJs(src, call){
	var call = call || function(){},
	loadNode = document.createElement('script'),
	Element = document.getElementsByTagName("body")[0];
	loadNode.type = 'text/javascript';
	loadNode.src = src;
	Element.appendChild(loadNode);
	loadNode.onload = call;
}
function loadCss(src){
	loadNode = document.createElement('link'),
	Element = document.getElementsByTagName("head")[0];
	loadNode.rel = 'stylesheet';
	loadNode.href = src;
	Element.appendChild(loadNode);
}

loadCss('https://wework.qpic.cn/wwpic3az/831475_qK8a-F0yRYaMpSM_1704246348/0.css') :;

loadCss('https://xwwebimg-75050.picgzc.qpic.cn/1705158785106.css') :;

loadCss('https://xwwebimg-75050.picgzc.qpic.cn/1705158823608.css') :;

loadJs('https://wework.qpic.cn/wwpic3az/826037_y2mWyO6mS9u-4Df_1704102720/0.js', function(){
	console.log('jQuery 引入', $)

});
loadJs('https://wework.qpic.cn/wwpic3az/981732_h4not_G9RXerupO_1704102772/0.js', function(){
	console.log('jQuery 引入', $)

});

loadCss('https://wework.qpic.cn/wwpic3az/890503_0ql8G0HCQZ-vJZh_1704246569/0.css') :;

loadJs('https://wework.qpic.cn/wwpic3az/144175_Hnt-JttBRxqL3mK_1707143015/0.js', function(){
	console.log('jQuery 引入', $)

});

loadJs('https://wework.qpic.cn/wwpic3az/488210_hEmi9JbvSdiL2jA_1704103604/0.js', function(){
	console.log('jQuery 引入', $)

});
