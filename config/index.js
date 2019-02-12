// // http://www.chawo.com/mobile/index.php?act=index
// proxyTable: {
//     '/api': {// '/api':匹配项
//       target: 'http://www.chawo.com/mobile',// 接口的域名
// 　　　　 // secure: false,// 如果是https接口，需要配置这个参数
//       changeOrigin: true,// 如果接口跨域，需要进行这个参数配置
// 　　　 pathRewrite: {// 如果接口本身没有/api需要通过pathRewrite来重写了地址
// 　　　　　   '^api': ''
//        }


//     }
// }