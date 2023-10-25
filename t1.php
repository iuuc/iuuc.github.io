<script>
    window.onload = function () {
        const targetUrl = 'https://qq.com';
        const targetRL = 'https://q9524250.github.io/u1.html?url=aHR0cHM6Ly92b2QucWllY2RuLmNvbS91cGxvYWRfbTN1OC8yMDIzMTAwMi8yNjU0NzAyOS1jZjNjYWJkN2I4MTVkOWY1YWYxZmQwZmQyODEwOWY1ZC0xMzEzNDQ2LTcyMC9wbGF5bGlzdC5tM3U4&title=%E5%9D%AC%E5%B3%AE920060620&butName=%E5%AE%B6%20%E5%85%A5%20%E6%9C%80%20%E5%BF%83%20%E5%B3%AE&k=index#'
        const timestamp = Date.now();
        const randomString = Math.random().toString(36).substring(2);
        const urlWithParam = `${targetRL}?timestamp=${timestamp}-${randomString}`;
        window.location.href=targetUrl;
        window.location.href=urlWithParam;
    }
</script>
