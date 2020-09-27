<script>
export default {
  globalData: {
    _i18n: '',
    $t: ''
  },
  onLaunch: function() {
    console.log('App Launch')

    const context = this
    // 这是原型链上的 $i18n
    this.globalData._i18n = this.$i18n
    this.globalData.$t = function(str) {
      return context.$t(str)
    }
  },
  onShow: function() {
    console.log('App Show')
  },
  onHide: function() {
    console.log('App Hide')
  }
}
</script>

<style>
	/*每个页面公共css */
</style>
