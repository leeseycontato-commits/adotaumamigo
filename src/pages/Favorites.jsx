import { Link } from 'react-router-dom'
import { animals } from '../data/animals.js'
import { useFavorites } from '../hooks/useFavorites.jsx'
import AnimalCard from '../components/AnimalCard.jsx'

export default function Favorites() {
  const { favorites } = useFavorites()
  const list = animals.filter((a) => favorites.includes(a.id))

  return (
    <>
      <h1>Os meus favoritos</h1>
      {list.length ? (
        <div className="grid">
          {list.map((a) => <AnimalCard key={a.id} animal={a} />)}
        </div>
      ) : (
        <p className="empty">
          Ainda não tem favoritos. <Link to="/">Ver animais</Link>
        </p>
      )}
    </>
  )
}
