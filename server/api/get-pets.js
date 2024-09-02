import { getQuery } from 'h3'

export default defineEventHandler(event => {
  const query = getQuery(event)
  const pets = [
    {
      id: 1,
      name: 'MO231 - Pomeranian White',
      gene: 'Male',
      thumbnail: '/pet-1.png',
      age: 2,
      price: 1000000,
      sku: '#4560001',
      published_date: '2021-11-01',
      location: 'Jakarta',
      vaccinated: 'Yes',
      dewormed: 'Yes',
      microchip: 'Yes',
      color: 'Silver',
      additional_info:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum aliquam. Nullam nec nunc nec nunc.',
      gallery: [
        '/pet-1.png',
        '/pet-2.png',
        '/product-1.png',
        '/product-1.png',
        '/pet-1.png',
        '/pet-2.png',
      ],
      category: 'small-dog',
    },
    {
      id: 2,
      name: 'MO232 - Pomeranian Black',
      gene: 'Female',
      thumbnail: '/pet-2.png',
      age: 1,
      price: 2000000,
      sku: '#4560002',
      published_date: '2021-12-01',
      location: 'Jakarta',
      vaccinated: 'Yes',
      dewormed: 'Yes',
      microchip: 'Yes',
      color: 'Black',
      additional_info:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum aliquam. Nullam nec nunc nec nunc.',
      gallery: [
        '/pet-2.png',
        '/pet-3.png',
        '/product-1.png',
        '/product-1.png',
        '/pet-1.png',
        '/pet-2.png',
      ],
      category: 'small-dog',
    },
    {
      id: 3,
      name: 'MO232 - Pomeranian Black',
      gene: 'Female',
      thumbnail: '/pet-3.png',
      age: 1,
      price: 2000000,
      sku: '#4560003',
      published_date: '2021-09-01',
      location: 'Jakarta',
      vaccinated: 'Yes',
      dewormed: 'Yes',
      microchip: 'Yes',
      color: 'Black',
      additional_info:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum aliquam. Nullam nec nunc nec nunc.',
      gallery: [
        '/pet-3.png',
        '/pet-2.png',
        '/product-1.png',
        '/product-1.png',
        '/pet-1.png',
        '/pet-2.png',
      ],
      category: 'small-dog',
    },
    {
      id: 4,
      name: 'MO232 - Pomeranian Black',
      gene: 'Female',
      thumbnail: '/pet-4.png',
      age: 1,
      price: 2000000,
      sku: '#4560004',
      published_date: '2021-09-11',
      location: 'Jakarta',
      vaccinated: 'Yes',
      dewormed: 'Yes',
      microchip: 'Yes',
      color: 'Black',
      additional_info:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum aliquam. Nullam nec nunc nec nunc.',
      gallery: [
        '/pet-4.png',
        '/pet-2.png',
        '/product-1.png',
        '/product-1.png',
        '/pet-1.png',
        '/pet-2.png',
      ],
      category: 'small-dog',
    },
    {
      id: 5,
      name: 'MO232 - Pomeranian Black',
      gene: 'Female',
      thumbnail: '/pet-5.png',
      age: 1,
      price: 2000000,
      sku: '#4560005',
      published_date: '2021-05-01',
      location: 'Jakarta',
      vaccinated: 'Yes',
      dewormed: 'Yes',
      microchip: 'Yes',
      color: 'Black',
      additional_info:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum aliquam. Nullam nec nunc nec nunc.',
      gallery: [
        '/pet-5.png',
        '/pet-2.png',
        '/product-1.png',
        '/product-1.png',
        '/pet-1.png',
        '/pet-2.png',
      ],
      category: 'small-dog',
    },
    {
      id: 6,
      name: 'MO232 - Pomeranian Black',
      gene: 'Female',
      thumbnail: '/pet-6.png',
      age: 1,
      price: 2000000,
      sku: '#4560006',
      published_date: '2021-09-04',
      location: 'Jakarta',
      vaccinated: 'Yes',
      dewormed: 'Yes',
      microchip: 'Yes',
      color: 'Silver',
      additional_info:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum aliquam. Nullam nec nunc nec nunc.',
      gallery: [
        '/pet-6.png',
        '/pet-2.png',
        '/product-1.png',
        '/product-1.png',
        '/pet-1.png',
        '/pet-2.png',
      ],
      category: 'small-dog',
    },
    {
      id: 7,
      name: 'MO232 - Pomeranian Black',
      gene: 'Female',
      thumbnail: '/pet-7.png',
      age: 1,
      price: 2000000,
      sku: '#4560007',
      published_date: '2021-09-01',
      location: 'Jakarta',
      vaccinated: 'Yes',
      dewormed: 'Yes',
      microchip: 'Yes',
      color: 'Black',
      additional_info:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum aliquam. Nullam nec nunc nec nunc.',
      gallery: [
        '/pet-7.png',
        '/pet-2.png',
        '/product-1.png',
        '/product-1.png',
        '/pet-1.png',
        '/pet-2.png',
      ],
      category: 'small-dog',
    },
    {
      id: 8,
      name: 'MO232 - Pomeranian Black',
      gene: 'Female',
      thumbnail: '/pet-8.png',
      age: 1,
      price: 2000000,
      sku: '#4560008',
      published_date: '2021-09-01',
      location: 'Jakarta',
      vaccinated: 'Yes',
      dewormed: 'Yes',
      microchip: 'Yes',
      color: 'Black',
      additional_info:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum aliquam. Nullam nec nunc nec nunc.',
      gallery: [
        '/pet-8.png',
        '/pet-2.png',
        '/product-1.png',
        '/product-1.png',
        '/pet-1.png',
        '/pet-2.png',
      ],
      category: 'small-dog',
    },
    {
      id: 9,
      name: 'MO232 - Anggora Cat',
      gene: 'Female',
      thumbnail: '/pet-9.png',
      age: 1,
      price: 2000000,
      sku: '#4560009',
      published_date: '2019-09-01',
      location: 'Jakarta',
      vaccinated: 'Yes',
      dewormed: 'Yes',
      microchip: 'Yes',
      color: 'Black',
      additional_info:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum aliquam. Nullam nec nunc nec nunc.',
      gallery: [
        '/pet-9.png',
        '/pet-2.png',
        '/product-1.png',
        '/product-1.png',
        '/pet-1.png',
        '/pet-2.png',
      ],
      category: 'cat',
    },

    {
      id: 10,
      name: 'MO232 - Anggora Cat',
      gene: 'Female',
      thumbnail: '/pet-10.png',
      age: 1,
      price: 2000000,
      sku: '#4560009',
      published_date: '2020-09-01',
      location: 'Jakarta',
      vaccinated: 'Yes',
      dewormed: 'Yes',
      microchip: 'Yes',
      color: 'Black',
      additional_info:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum aliquam. Nullam nec nunc nec nunc.',
      gallery: [
        '/pet-10.png',
        '/pet-2.png',
        '/product-1.png',
        '/product-1.png',
        '/pet-1.png',
        '/pet-2.png',
      ],
      category: 'cat',
    },
    {
      id: 11,
      name: 'MO232 - Anggora Cat',
      gene: 'Female',
      thumbnail: '/pet-11.png',
      age: 1,
      price: 2000000,
      sku: '#4560009',
      published_date: '2024-09-01',
      location: 'Jakarta',
      vaccinated: 'Yes',
      dewormed: 'Yes',
      microchip: 'Yes',
      color: 'Black',
      additional_info:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum aliquam. Nullam nec nunc nec nunc.',
      gallery: [
        '/pet-11.png',
        '/pet-2.png',
        '/product-1.png',
        '/product-1.png',
        '/pet-1.png',
        '/pet-2.png',
      ],
      category: 'cat',
    },

    {
      id: 12,
      name: 'MO232 - Anggora Cat',
      gene: 'Female',
      thumbnail: '/pet-12.png',
      age: 1,
      price: 2000000,
      sku: '#4560009',
      published_date: '2023-09-01',
      location: 'Jakarta',
      vaccinated: 'Yes',
      dewormed: 'Yes',
      microchip: 'Yes',
      color: 'Black',
      additional_info:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum aliquam. Nullam nec nunc nec nunc.',
      gallery: [
        '/pet-12.png',
        '/pet-2.png',
        '/product-1.png',
        '/product-1.png',
        '/pet-1.png',
        '/pet-2.png',
      ],
      category: 'small-cat',
    },
    {
      id: 13,
      name: 'MO232 - Anggora Cat',
      gene: 'Female',
      thumbnail: '/pet-13.png',
      age: 1,
      price: 2000000,
      sku: '#4560009',
      published_date: '2022-09-01',
      location: 'Jakarta',
      vaccinated: 'Yes',
      dewormed: 'Yes',
      microchip: 'Yes',
      color: 'Black',
      additional_info:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum aliquam. Nullam nec nunc nec nunc.',
      gallery: [
        '/pet-13.png',
        '/pet-2.png',
        '/product-1.png',
        '/product-1.png',
        '/pet-1.png',
        '/pet-2.png',
      ],
      category: 'small-cat',
    },
    {
      id: 14,
      name: 'MO232 - Dog Golden Retriever',
      gene: 'Female',
      thumbnail: '/pet-14.png',
      age: 1,
      price: 2000000,
      sku: '#4560009',
      published_date: '2021-09-01',
      location: 'Jakarta',
      vaccinated: 'Yes',
      dewormed: 'Yes',
      microchip: 'Yes',
      color: 'Apricot',
      additional_info:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum aliquam. Nullam nec nunc nec nunc.',
      gallery: [
        '/pet-14.png',
        '/pet-2.png',
        '/product-1.png',
        '/product-1.png',
        '/pet-1.png',
        '/pet-2.png',
      ],
      category: 'dog',
    },
  ]

  const id = query.id ? Number(query.id) : null
  const category = query.category || null
  const sort = query.sort || null
  const gene = query.gene
    ? Array.isArray(query.gene)
      ? query.gene
      : [query.gene]
    : []
  const color = query.color
    ? Array.isArray(query.color)
      ? query.color
      : [query.color]
    : []
  const minPrice = query.minPrice ? Number(query.minPrice) : null
  const maxPrice = query.maxPrice ? Number(query.maxPrice) : null

  let filteredPets = pets

  if (id !== null) {
    const pet = pets.find(pet => pet.id === id)

    if (!pet) {
      return {
        statusCode: 404,
        statusMessage: 'Pet not found',
      }
    }

    return pet
  }

  if (category && category !== 'all') {
    filteredPets = filteredPets.filter(pet => pet.category === category)
  }

  if (gene.length > 0) {
    filteredPets = filteredPets.filter(pet =>
      gene.map(g => g.toLowerCase()).includes(pet.gene.toLowerCase()),
    )
  }
  
  if (color.length > 0) {
    filteredPets = filteredPets.filter(pet =>
      color.map(c => c.toLowerCase()).includes(pet.color.toLowerCase()),
    )
  }

  if (minPrice !== null) {
    filteredPets = filteredPets.filter(pet => pet.price >= minPrice)
  }
  if (maxPrice !== null) {
    filteredPets = filteredPets.filter(pet => pet.price <= maxPrice)
  }

  filteredPets = filteredPets.filter(
    pet => !isNaN(new Date(pet.published_date)),
  )

  if (sort === 'newest') {
    filteredPets = filteredPets.sort(
      (a, b) => new Date(b.published_date) - new Date(a.published_date),
    )
  } else if (sort === 'oldest') {
    filteredPets = filteredPets.sort(
      (a, b) => new Date(a.published_date) - new Date(b.published_date),
    )
  }

  return filteredPets
})
