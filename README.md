# mapp

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

# 问题记录
1. 下载模板后须设置eslint，否则编译会报错
新建.editorconfig/.eslintignore/.eslinttrc.js三个文件
2. 忽略不上传git的文件
新建.gitignore
3. 格式化代码用vetur插件的格式化功能
4. 移动端自适应方案
下载px2rem-loader插件，在utils.js中增加px2remLoader对象
下载lib-flexiable,在main.js中引入
5. vue怎么使用阿里矢量图标库
参照：https://blog.csdn.net/qq_32113629/article/details/79740949
报错，许增加postcss.config.js配置文件进行相应配置
6. vue中使用less需要安装less less-loader
7. vue开发中常用插件：https://blog.csdn.net/mr_hexs/article/details/80374950
主要解决：移动端点击事件延迟300毫秒、移动端1像素边框问题、滑动插件等
8. vue中使用axios  
安装axios npm install axios
配置config/index.js 中proxyTable 为静态资源的路径
9. 图片路径处理问题
把图片放到static中处理等
10. 动态组件传值
参照subNav.vue组件
11. 滚动插件better-scroll npm install better-scroll
https://github.com/ustbhuangyi/better-scroll/blob/master/README_zh-CN.md
12. vue-router全局守卫-> https://www.cnblogs.com/minigrasshopper/p/7928311.html
路由里面怎么调用vuex-> https://segmentfault.com/q/1010000007871328
13. 操作cookie   npm install js-cookie
github:https://github.com/js-cookie/js-cookie
14. 表单验证工具 vee-validate  参照官网   网上教程大部分已过时（涉及API已经废除）
https://baianat.github.io/vee-validate/guide/messages.html#field-specific-custom-messages
15. vuex使用案例
https://www.cnblogs.com/SamWeb/p/6543931.html
vuex使用中注意的点: https://www.jianshu.com/p/3391cfb1180e
16. vue中编译mapMutations等报错
https://blog.csdn.net/xdongll/article/details/74295299
这个链接提供了思路，具体参考配置文件.babelrc
17. vuex中如何做路由跳转
https://segmentfault.com/q/1010000007333415?_ea=1312601
注：在commit或者dispatch时，将router作为参数传过去
18. 组件重复渲染问题，解决方案：监听$router，参见src/pages/news/components/List.vue
https://blog.csdn.net/zkh_101/article/details/79120548
https://blog.csdn.net/Clark_Fitz817/article/details/79134944
19. 异步数据better-scroll不滚动问题
https://www.imooc.com/wenda/detail/386735
20. 流程步骤、时间线插件
https://github.com/luyilin/vue-cute-timeline
21. 日历控件
https://github.com/jinzhe/vue-calendar
现在用的介个：https://www.cnblogs.com/zhengweijie/p/7289764.html
22. 时间处理插件moment
npm install moment --save-dev
23. 判断对象是否为空
https://www.cnblogs.com/HKCC/p/6083575.html
24. 日期阻止虚拟键盘谈起
https://blog.csdn.net/qq_24147051/article/details/52958610
25. mockjs mock数据模拟
https://www.cnblogs.com/jasonwang2y60/p/7302449.html
https://github.com/nuysoft/Mock/wiki/Getting-Started
26. better-scroll上拉加载下拉刷新
https://www.cnblogs.com/xiaohaifengke/p/7308943.html
https://www.cnblogs.com/chengxiang123/p/9214641.html