import { getQuery } from 'h3'
import pets from '../../data/pets.json'

export default defineEventHandler(event => {
  const query = getQuery(event)

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
  const page = query.page ? Number(query.page) : 1
  const pageSize = query.pageSize ? Number(query.pageSize) : 9

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

  // Pagination
  const totalItems = filteredPets.length
  const totalPages = Math.ceil(totalItems / pageSize)
  const startIndex = (page - 1) * pageSize
  const endIndex = startIndex + pageSize
  const paginatedPets = filteredPets.slice(startIndex, endIndex)

  // Meta information
  const meta = {
    totalItems,
    totalPages,
    currentPage: page,
    pageSize,
  }

  // return filteredPets
  return {
    data: paginatedPets,
    meta,
  }
})
