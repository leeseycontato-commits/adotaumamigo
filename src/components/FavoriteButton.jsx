import { useFavorites } from '../hooks/useFavorites.jsx'

export default function FavoriteButton({ id, large = false }) {
  const { isFavorite, toggleFavorite } = useFavorites()
  const active = isFavorite(id)
  return (
    <button
      type="button"
      className={`fav-btn ${active ? 'active' : ''} ${large ? 'large' : ''}`}
      aria-label={active ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
      onClick={(e) => {
        e.preventDefault()
        toggleFavorite(id)
      }}
    >
      {active ? '♥' : '♡'}{large && (active ? ' Nos favoritos' : ' Favoritar')}
    </button>
  )
}
