// 全量引入
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import 'dayjs/locale/zh-cn'
import locale from 'element-plus/lib/locale/lang/zh-cn'

export default function mountElementUI(app) {
  app.use(ElementPlus, { locale })
}
