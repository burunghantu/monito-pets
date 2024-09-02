// import menus from '@/data/menus.json'
import { getQuery } from 'h3'
import menuEn from '~/data/menu-en'
import menuId from '~/data/menu-id'

export default defineEventHandler((event) => {
  const query = getQuery(event)

  const menus = {
    en: menuEn,
    id: menuId,
  }

  let menuLocale = menus.en

  if (query.locale !== undefined) {
    menuLocale = menus[query.locale]
  }

  return menuLocale
})
