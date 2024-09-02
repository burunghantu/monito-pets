import id from './id-ID'
import en from './en-US'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'id',
  messages: { id, en }
}))
