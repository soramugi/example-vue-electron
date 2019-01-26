module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        mac: {
          icon: 'build/icon.png',
          target: 'zip',
        },
        win: {
          icon: 'build/icon.png',
        },
        // publish: {
        //   provider: 's3',
        //   bucket: 'example-vue-electron',
        //   region: 'ap-northeast-1',
        //   acl: 'public-read',
        //   "x-amz-acl": "public-read",
        // },
        publish: {
          provider: 'generic',
          url: 'http://soramugi.xsrv.jp/electron/',
          publishAutoUpdate: true,
          channel: 'latest'
        },
      }
    }
  }
}
