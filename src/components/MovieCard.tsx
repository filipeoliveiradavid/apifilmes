import { Link } from "react-router-dom"

function MovieCard({ movie }: any) {
  const image = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

  function renderStars(vote: number) {
    const stars = Math.round(vote / 2)
    return "⭐".repeat(stars)
  }

  return (
    <div className="movie-card">
      <img src={image} alt={movie.title} />

      <div className="movie-card-content">
        <h3>{movie.title}</h3>

        <p className="movie-rating">
          {movie.vote_average.toFixed(1)} / 10
        </p>

        <p className="movie-stars">{renderStars(movie.vote_average)}</p>

        <Link to={`/movie/${movie.id}`} className="details-btn">
          Ver detalhes
        </Link>
      </div>
    </div>
  )
}

export default MovieCard