// import menus from '@/data/menus.json'
import { getQuery } from 'h3'

export default defineEventHandler((event) => {
  const query = getQuery(event)

  const data = {
    en: [
      {
        title: 'Revolutionary way to build the web',
        description: 'Step into our Innovative Space, where Digital Excellence Meets Exceptional Creativity',
        image: '/assets/img/nuxt-logo.svg',
        background: '/assets/img/bg-space.jpg',
        ctas: [
          {
            title: 'Start Tour',
            url: '/',
            type: 'primary'
          },
          {
            title: 'Take a Tour',
            url: '/',
            type: 'primary-outline'
          },
        ],
      },
    ],
    id: [
      {
        title: 'Cara revolusioner untuk membangun web',
        description: 'Masuki Ruang Inovatif kami, tempat Keunggulan Digital Berpadu dengan Kreativitas Luar Biasa',
        image: '/assets/img/nuxt-logo.svg',
        background: '/assets/img/bg-space.jpg',
        ctas: [
          {
            title: 'Mulai Tur',
            url: '/',
            type: 'primary'
          },
          {
            title: 'Ambil Tur',
            url: '/',
            type: 'primary-outline'
          },
        ],
      },
    ],
  }

  let dataLocale = data.en

  if (query.locale !== undefined) {
    dataLocale = data[query.locale]
  }

  return dataLocale
})
