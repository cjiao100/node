# express

基于node.js的web应用开发框架

## 创建项目

    express app     == jaba
    express -e app == ejs

## 启动项目
    
    DEBUG=app:* npm start

## 目录结构

    bin/www ===>   启动文件【入口文件】
    app.js     ===>   全局配置文件
    routers   ===>   路由的配置
    views       ===>   页面
    public       ===>   静态资源【css、img、js】