
module.exports= {
  //这里的配置会和总的配置合并
  configureWebpack: {
    resolve: {
      alias: {
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
        'assets': '@/assets'

      }
    }
  }


}
