import { Link, useParams } from 'react-router-dom'
import { getAnimal } from '../data/animals.js'
import useAnimalImage from '../hooks/useAnimalImage.js'
import FavoriteButton from '../components/FavoriteButton.jsx'
import NotFound from './NotFound.jsx'

export default function AnimalDetail() {
  const { id } = useParams()
  const animal = getAnimal(id)
  const img = useAnimalImage(animal)

  if (!animal) return <NotFound />

  return (
    <article className="detail">
      <Link to="/" className="back">← Voltar</Link>
      <div className="detail-grid">
        <div className="detail-img">
          {img ? <img src={img} alt={`${animal.name}, ${animal.breed}`} /> : <div className="skeleton" />}
        </div>
        <div>
          <h1>{animal.name}</h1>
          <ul className="tags">
            <li>{animal.type}</li>
            <li>{animal.breed}</li>
            <li>{animal.age}</li>
            <li>{animal.sex}</li>
            <li>📍 {animal.location}</li>
          </ul>
          <p>{animal.description}</p>
          <div className="actions">
            <FavoriteButton id={animal.id} large />
            <a className="btn" href={`mailto:adocoes@patinhas.pt?subject=${encodeURIComponent(`Quero adotar o/a ${animal.name}`)}`}>
              Quero adotar
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}
