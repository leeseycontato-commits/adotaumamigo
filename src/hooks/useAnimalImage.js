import { useEffect, useState } from 'react'

const cache = new Map()

const fallback = (animal) =>
  `https://placehold.co/600x450/f4e9dc/8a5a3b?text=${encodeURIComponent(animal.name)}`

async function fetchImage(animal) {
  if (animal.type === 'Cão') {
    const res = await fetch(`https://dog.ceo/api/breed/${animal.apiBreed}/images/random`)
    const data = await res.json()
    if (data.status !== 'success') throw new Error('Dog CEO API error')
    return data.message
  }
  const res = await fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${animal.apiBreed}`)
  const data = await res.json()
  if (!data[0]?.url) throw new Error('The Cat API error')
  return data[0].url
}

// Busca uma imagem por animal e guarda-a em cache, para que a listagem e o detalhe mostrem a mesma foto
export default function useAnimalImage(animal) {
  const [src, setSrc] = useState(() => (animal ? cache.get(animal.id) : undefined))

  useEffect(() => {
    if (!animal) return
    if (cache.has(animal.id)) {
      setSrc(cache.get(animal.id))
      return
    }
    let active = true
    fetchImage(animal)
      .catch(() => fallback(animal))
      .then((url) => {
        cache.set(animal.id, url)
        if (active) setSrc(url)
      })
    return () => {
      active = false
    }
  }, [animal])

  return src
}
