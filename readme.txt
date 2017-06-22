npm init -y 初始化一个package.json记录所有依赖

npm install webpack webpack-dev-server --save-dev   webpack是安装webpack解析包  webpack-dev-server是webpack服务  是开发依赖 上线就不需要了

vue         需要解析vue    解析vue模板
npm install vue-loader vue-template-compiler --save-dev
vue上线需要依赖的
npm install vue vue-router --save

babel
npm install babel-core babel-loader babel-preset-es2015(解析es6) style-loader css-loader --save-dev
npm install html-webpack-plugin --save-dev 打包html文件的一个插件 

npm install babel-preset-stage-0 --save-dev 是为了在es6中兼容...App

package.json
实时预览    开发            进度条     颜色                   dist目录下  端口  试刷新 
"dev": "webpack-dev-server --grogress --colors --content-base dist --port 300 --inline"

安装动画包
npm install animate.css --save

安装npm install vue-resource --save 是为了请求数据