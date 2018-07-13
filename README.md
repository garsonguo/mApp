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