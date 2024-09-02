import { getQuery } from 'h3'

export default defineEventHandler((event) => {
  const query = getQuery(event)

  const data = {
    en: [
      {
        testimonial: 'This is a section of some simple filler text, also known as placeholder text.',
        image: 'https://placehold.co/100x100',
        name: 'John McCulling',
        details: 'CEO, Datadrift',
      },
      {
        testimonial: 'This is a section of some simple filler text, also known as placeholder text.',
        image: 'https://placehold.co/100x100',
        name: 'Kate Berg',
        details: 'CFO, Dashdash',
      },
      {
        testimonial: 'This is a section of some simple filler text, also known as placeholder text.',
        image: 'https://placehold.co/100x100',
        name: 'Greg Jackson',
        details: 'CTO, Uptime',
      },
    ],
    id: []
  }

  let dataLocale = data.en

  if (query.locale !== undefined) {
    dataLocale = data[query.locale]
  }

  if (query.size !== undefined) {
    dataLocale = dataLocale.slice(0, parseInt(query.size as string))
  }

  return dataLocale
})