import Vue from 'vue'
import VueI18n from '@/node_modules/vue-i18n/dist/vue-i18n.esm.js'
import langEn from './en'
import langZhCN from './zh-CN'

Vue.use(VueI18n)

let currentLang = uni.getStorageSync('CURRENT_LANG')
if (!currentLang) {
	// 获取设备信息
	uni.getSystemInfo({
		success: function (res) {
			uni.setStorageSync('CURRENT_LANG', res.language)
			currentLang = res.language
		}
	})
}
const i18n = new VueI18n({
	// 默认选择的语言
	locale: currentLang,
	messages: {
		'en': langEn,
		'zh-CN': langZhCN
	}
})

// console.log(VueI18n.version)
export default i18n