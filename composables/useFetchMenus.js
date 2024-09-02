export default async () => {
  const { data, error } = await useFetch('/api/menus')

  if (error.value) {
    throw createError({
      ...error.value,
      statusMessage: 'Unable to fetch menus'
    })
  }

  return data
}
