import Vue from 'vue'
import VueI18n from 'vue-i18n'
import langEn from './en'
import langZhCN from './zh_CN'

Vue.use(VueI18n)

const system_info = uni.getStorageSync('system_info')
if (!system_info) {
	// 获取设备信息
	uni.getSystemInfo({
		success: function (res) {
			uni.setStorageSync('system_info', res);
		}
	})
}
const currentLang = system_info.language === 'en' ? 'en' : 'zh_CN'
const i18n = new VueI18n({
	// 默认选择的语言
	locale: currentLang || 'zh_CN',
	messages: {
		'en': langEn,
		'zh_CN': langZhCN
	}
})
export default i18n