import { getQuery } from 'h3'

export default defineEventHandler((event) => {
  const query = getQuery(event)

  const data = {
    en: [
      {
        title: 'Judul Berita pada Suatu Website Pada Umumnya',
        description:
          'This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.',
        image: 'https://placehold.co/400x300',
        slug: 'judul-berita',
        date: '2024-12-10 00:00:00',
        tags: [
          {
            title: 'News',
          },
        ],
      },
      {
        title: 'Judul Berita pada Suatu Website Pada Umumnya',
        description:
          'This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.',
        image: 'https://placehold.co/400x300',
        slug: 'judul-berita',
        date: '2024-12-10 00:00:00',
        tags: [
          {
            title: 'News',
          },
        ],
      },
      {
        title: 'Judul Berita pada Suatu Website Pada Umumnya',
        description:
          'This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.',
        image: 'https://placehold.co/400x300',
        slug: 'judul-berita',
        date: '2024-12-10 00:00:00',
        tags: [
          {
            title: 'News',
          },
        ],
      },
      {
        title: 'Judul Berita pada Suatu Website Pada Umumnya',
        description:
          'This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.',
        image: 'https://placehold.co/400x300',
        slug: 'judul-berita',
        date: '2024-12-10 00:00:00',
        tags: [
          {
            title: 'News',
          },
        ],
      },
    ],
    id: []
  }

  let dataLocale = data.en

  if (query.locale !== undefined) {
    dataLocale = data[query.locale]
  }

  return dataLocale
})