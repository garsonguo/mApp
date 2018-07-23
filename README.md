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