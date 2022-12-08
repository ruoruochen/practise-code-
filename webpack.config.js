const path = require('path')

module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'./dist')
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader'],
            },
            {
                test:/\.js$/,
                use:['chenyaya-promise-catch-loader']
            }
        ]
    },
    resolve:{
        extensions:[],
        alias:{
            '@components':'./src/components'
        }
    }
}