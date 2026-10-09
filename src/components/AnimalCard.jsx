import { Link } from 'react-router-dom'
import useAnimalImage from '../hooks/useAnimalImage.js'
import FavoriteButton from './FavoriteButton.jsx'

export default function AnimalCard({ animal }) {
  const img = useAnimalImage(animal)
  return (
    <Link to={`/animal/${animal.id}`} className="card">
      <div className="card-img">
        {img ? <img src={img} alt={`${animal.name}, ${animal.breed}`} loading="lazy" /> : <div className="skeleton" />}
        <FavoriteButton id={animal.id} />
      </div>
      <div className="card-body">
        <h3>{animal.name}</h3>
        <p className="muted">{animal.breed} · {animal.age}</p>
        <p className="muted">📍 {animal.location}</p>
      </div>
    </Link>
  )
}
