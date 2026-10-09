import { useMemo, useState } from 'react'
import { animals } from '../data/animals.js'
import AnimalCard from '../components/AnimalCard.jsx'

const unique = (list) => [...new Set(list)].sort()

export default function Home() {
  const [search, setSearch] = useState('')
  const [type, setType] = useState('')
  const [breed, setBreed] = useState('')
  const [location, setLocation] = useState('')

  const breeds = unique(animals.filter((a) => !type || a.type === type).map((a) => a.breed))
  const locations = unique(animals.map((a) => a.location))

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    return animals.filter(
      (a) =>
        (!q || a.name.toLowerCase().includes(q) || a.breed.toLowerCase().includes(q)) &&
        (!type || a.type === type) &&
        (!breed || a.breed === breed) &&
        (!location || a.location === location),
    )
  }, [search, type, breed, location])

  const clear = () => {
    setSearch('')
    setType('')
    setBreed('')
    setLocation('')
  }

  return (
    <>
      <section className="hero">
        <h1>Encontre o seu novo melhor amigo</h1>
        <p>Cães e gatos à espera de uma família cheia de amor.</p>
      </section>

      <section className="filters">
        <input type="search" placeholder="Pesquisar por nome ou raça…" value={search} onChange={(e) => setSearch(e.target.value)} />
        <select value={type} onChange={(e) => { setType(e.target.value); setBreed('') }}>
          <option value="">Todos os tipos</option>
          <option value="Cão">Cães</option>
          <option value="Gato">Gatos</option>
        </select>
        <select value={breed} onChange={(e) => setBreed(e.target.value)}>
          <option value="">Todas as raças</option>
          {breeds.map((b) => <option key={b}>{b}</option>)}
        </select>
        <select value={location} onChange={(e) => setLocation(e.target.value)}>
          <option value="">Todas as localizações</option>
          {locations.map((l) => <option key={l}>{l}</option>)}
        </select>
        <button type="button" className="btn-secondary" onClick={clear}>Limpar</button>
      </section>

      {filtered.length ? (
        <div className="grid">
          {filtered.map((a) => <AnimalCard key={a.id} animal={a} />)}
        </div>
      ) : (
        <p className="empty">Nenhum animal encontrado com estes filtros. 🐶🐱</p>
      )}
    </>
  )
}
