import { getQuery } from 'h3'

export default defineEventHandler(event => {
  const query = getQuery(event)

  const products = [
    {
      id: 1,
      name: 'Cat Scratching ball toy kitten sisal rope ball',
      product: 'Toy',
      size: 'M',
      price: 1000000,
      thumbnail: '/product-1.png',
      bonus: 'Free Toy & Shaker',
      description:
        'This is a description of the product Cat Scratching ball toy kitten sisal rope ball',
      gallery: [
        '/product-1.png',
        '/pet-2.png',
        '/pet-3.png',
        '/pet-4.png',
        '/pet-5.png',
      ],
    },
    {
      id: 2,
      name: 'Pet Dog Cat Bed Puppy Cushion House Pet Soft Warm Kennel Dog Mat Blanket',
      product: 'Bed',
      size: 'M',
      price: 2000000,
      thumbnail: '/product-2.png',
      bonus: 'Free Cat Food',
      description:
        'This is a description of the product Pet Dog Cat Bed Puppy Cushion House Pet Soft Warm Kennel Dog Mat Blanket',
      gallery: [
        '/product-2.png',
        '/pet-3.png',
        '/pet-4.png',
        '/pet-5.png',
        '/pet-5.png',
      ],
    },
    {
      id: 3,
      name: 'Reflex Plus Adult Cat Food Salmon',
      product: 'Cat Food',
      size: '1.5kg',
      price: 2000000,
      thumbnail: '/product-3.png',
      bonus: 'Free Cat Food',
      description:
        'This is a description of the product Reflex Plus Adult Cat Food Salmon',
      gallery: [
        '/product-3.png',
        '/pet-3.png',
        '/pet-4.png',
        '/pet-5.png',
        '/pet-5.png',
      ],
    },
    {
      id: 4,
      name: 'Reflex Plus Adult Cat Food Salmon',
      product: 'Cat Food',
      size: '1.5kg',
      price: 2000000,
      thumbnail: '/product-4.png',
      bonus: 'Free Cat Food',
      description:
        'This is a description of the product Reflex Plus Adult Cat Food Salmon',
      gallery: [
        '/product-4.png',
        '/pet-3.png',
        '/pet-4.png',
        '/pet-5.png',
        '/pet-5.png',
      ],
    },
    {
      id: 5,
      name: 'Cute Pet Cat Warm Nest',
      product: 'Toy',
      size: '1.5kg',
      price: 2000000,
      thumbnail: '/product-5.png',
      bonus: 'Free Cat Food',
      description:
        'This is a description of the product Cute Pet Cat Warm Nest',
      gallery: [
        '/product-5.png',
        '/pet-3.png',
        '/pet-4.png',
        '/pet-5.png',
        '/pet-5.png',
      ],
    },
    {
      id: 6,
      name: 'Costumes Fashion Pet Clother Cowboy Rider',
      product: 'Costume',
      size: 'M',
      price: 2000000,
      thumbnail: '/product-6.png',
      bonus: 'Free Cat Food',
      description:
        'This is a description of the product Costumes Fashion Pet Clother Cowboy Rider',
      gallery: [
        '/product-6.png',
        '/pet-3.png',
        '/pet-4.png',
        '/pet-5.png',
        '/pet-5.png',
      ],
    },
    {
      id: 7,
      name: 'Costumes Chicken Drumsti ck Headband',
      product: 'Costume',
      size: 'M',
      price: 2000000,
      thumbnail: '/product-7.png',
      bonus: 'Free Cat Food',
      description:
        'This is a description of the product Costumes Chicken Drumsti ck Headband',
      gallery: [
        '/product-7.png',
        '/pet-3.png',
        '/pet-4.png',
        '/pet-5.png',
        '/pet-5.png',
      ],
    },
    {
      id: 8,
      name: 'Plush Pet Toy',
      product: 'Toy',
      size: '1.5kg',
      price: 2000000,
      thumbnail: '/product-8.png',
      bonus: 'Free Cat Food',
      description: 'This is a description of the product Plush Pet Toy',
      gallery: [
        '/product-8.png',
        '/pet-3.png',
        '/pet-4.png',
        '/pet-5.png',
        '/pet-5.png',
      ],
    },
  ]

  const id = query.id ? Number(query.id) : null

  if (id !== null) {
    const product = products.find(product => product.id === id)

    if (!product) {
      return {
        statusCode: 404,
        statusMessage: 'Pet not found',
      }
    }

    return product
  }

  return products
})
