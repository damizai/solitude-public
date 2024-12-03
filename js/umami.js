// umami 统计分析工具
(function() {
    var currentDomain = window.location.hostname;
    if (currentDomain.includes('solitude.liuer.xin')) {
        var script = document.createElement('script');
        script.src = "https://um.200038.xyz/script.js"; // 这个需要你自己看着改改
        script.setAttribute('data-website-id', '0d1aaa4b-56c8-4b6d-9d90-49e17fa68ede');
        script.async = true; // 将script的async属性设置为true，实现异步加载
        document.head.appendChild(script);
        console.log('========成功加载 [solitude.liuer.xin] 统计分析工具代码========');
    } else { // 比如本地调试，就不需要统计了，要不然会发现统计页面很多来自本地localhost
        console.log('========当前网站不需要加载统计分析工具========');
    }
})();