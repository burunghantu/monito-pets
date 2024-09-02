import { getQuery } from 'h3'

export default defineEventHandler((event) => {
  const query = getQuery(event)

  const data = {
    en: [
      {
        title: 'Judul Koleksi',
        category: 'Kategori',
        image: 'https://placehold.co/600x400',
        slug: 'judul-koleksi',
      },
      {
        title: 'Judul Koleksi',
        category: 'Kategori',
        image: 'https://placehold.co/600x400',
        slug: 'judul-koleksi',
      },
      {
        title: 'Judul Koleksi',
        category: 'Kategori',
        image: 'https://placehold.co/600x400',
        slug: 'judul-koleksi',
      },
      {
        title: 'Judul Koleksi',
        category: 'Kategori',
        image: 'https://placehold.co/600x400',
        slug: 'judul-koleksi',
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