module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        mac: {
          icon: 'build/icon.png',
          target: [ 'zip', 'dmg' ],
        },
        win: {
          icon: 'build/icon.png',
        },
        // publish: {
        //   provider: 's3',
        //   bucket: 'example-vue-electron',
        //   region: 'ap-northeast-1',
        // },
        publish: {
          provider: 'github'
        }
      }
    }
  }
}
