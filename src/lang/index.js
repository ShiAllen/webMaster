import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { getLang } from '@/common/lang'
import elementEnLocale from 'element-ui/lib/locale/lang/en'
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'
import elementtwLocale from 'element-ui/lib/locale/lang/zh-TW'
import enLocale from './en'
import zhLocale from './zh'
import twLocale from './tw'

Vue.use(VueI18n)

const messages = {
  en: {
    ...enLocale,
    ...elementEnLocale
  },
  zh: {
    ...zhLocale,
    ...elementZhLocale
  },
  tw: {
    ...twLocale,
    ...elementtwLocale
  }
}

const i18n = new VueI18n({
//  locale: getLang() || 'zh',
  locale: getLang() || 'tw',
  messages
})

export default i18n
