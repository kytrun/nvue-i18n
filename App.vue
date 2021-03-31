<script>
export default {
  globalData: {
    $i18n: {},
    $t: {}
  },
  onLaunch: function() {
    console.log('App Launch')
	
    this.globalData.$i18n = this.$i18n
    this.globalData.$t = str => this.$t(str)
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
