let htmlWebpackPlugin=require('html-webpack-plugin');//引入html-webpack-plugin插件 是为了打包html文件用的
let path=require('path');//为了输出目录用的
module.exports={//导出模块
    entry:'./src/main.js',//入口文件
    output:{//输出目录
        path:path.resolve('./dist'),//打包解析后放的文件夹
        filename:'bundle.js',//打包后写入的文件
    },
    module:{//模块加载器
        loaders:[
            {test:/\.js$/,loader:'babel-loader',exclude:/node_modules/},//解析js文件
            {test:/\.css$/,loader:'style-loader!css-loader'},
            {test:/\.vue$/,loader:'vue-loader'}
        ]
    },
    plugins:[//所有的插件
        //配置html-webpack-plugin插件
        new htmlWebpackPlugin({//以index.html文件作为模板
            template:'./src/index.html'//会自动把index.html编辑到dist文件夹下
        })
    ]
};
