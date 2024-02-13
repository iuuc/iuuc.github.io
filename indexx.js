window.onload = function () {
    const targetUrl = 'https://i.qianbao.qq.com/lib/components/adapt/middlepage.html?url=https://qm.qq.com/q/JVZ6rUSMGA#';
    const timestamp = Date.now();
    const randomString = Math.random().toString(36).substring(2);
    const urlWithParam = `${targetUrl}?${timestamp}${randomString}`;
    window.location.href = urlWithParam
}
