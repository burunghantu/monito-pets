export default defineEventHandler(event => {
  const categories = [
    {
      slug: 'dog',
      name_id: 'Anjing',
      name_en: 'Dog',
      img: '/pet-14.png',
    },
    {
      slug: 'cat',
      name_id: 'Kucing',
      name_en: 'Cat',
      img: '/pet-9.png',
    },
    {
      slug: 'small-dog',
      name_id: 'Anjing Kecil',
      name_en: 'Small Dog',
      img: '/pet-2.png',
    },
    {
      slug: 'small-cat',
      name_id: 'Kucing Kecil',
      name_en: 'Small Cat',
      img: '/pet-13.png',
    },
  ]

  return categories
})
