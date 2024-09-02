export default defineEventHandler(event => {
  const categories = [
    {
      slug: 'dog',
      name_id: 'Anjing',
      name_en: 'Dog',
      img: '/assets/img/pet-14.png',
    },
    {
      slug: 'cat',
      name_id: 'Kucing',
      name_en: 'Cat',
      img: '/assets/img/pet-9.png',
    },
    {
      slug: 'small-dog',
      name_id: 'Anjing Kecil',
      name_en: 'Small Dog',
      img: '/assets/img/pet-2.png',
    },
    {
      slug: 'small-cat',
      name_id: 'Kucing Kecil',
      name_en: 'Small Cat',
      img: '/assets/img/pet-13.png',
    },
  ]

  return categories
})
