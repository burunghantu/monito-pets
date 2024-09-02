// import menus from '@/data/menus.json'
import { getQuery } from 'h3'

export default defineEventHandler(event => {
  const query = getQuery(event)

  const data = {
    en: {
      settings: {
        companyName: 'Suit Baze Nuxt',
        companyDescription:
          'Filler text is dummy text which has no meaning however looks very similar to real text.',
        copyright: '2024 - Suit Baze Nuxt. All rights reserved.',
      },
      socials: [
        {
          name: 'facebook',
          url: '/',
        },
        {
          name: 'x',
          url: '/',
        },
        {
          name: 'linkedin',
          url: '/',
        },
        {
          name: 'whatsapp',
          url: '/',
        },
      ],
      menu: [
        {
          title: 'Products',
          items: [
            { title: 'Overview', url: '/' },
            { title: 'Solutions', url: '/' },
            { title: 'Pricing', url: '/' },
            { title: 'Customers', url: '/' },
          ],
        },
        {
          title: 'Company',
          items: [
            { title: 'About', url: '/' },
            { title: 'Investor Relations', url: '/' },
            { title: 'Jobs', url: '/' },
            { title: 'Press', url: '/' },
            { title: 'Blog', url: '/' },
          ],
        },
        {
          title: 'Support',
          items: [
            { title: 'Contact', url: '/' },
            { title: 'Documentation', url: '/' },
            { title: 'Chat', url: '/' },
            { title: 'FAQ', url: '/' },
          ],
        },
        {
          title: 'Legal',
          items: [
            { title: 'Terms of Service', url: '/' },
            { title: 'Privacy Policy', url: '/' },
            { title: 'Cookie Settings', url: '/' },
          ],
        },
      ],
    },
    id: {},
  }

  let dataLocale = data.en

  if (query.locale !== undefined) {
    dataLocale = data[query.locale]
  }

  return dataLocale
})
