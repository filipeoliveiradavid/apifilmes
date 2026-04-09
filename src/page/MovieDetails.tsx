import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import api from "../services/api"

function MovieDetails(){

  const { id } = useParams()
  const navigate = useNavigate()

  const [movie,setMovie] = useState<any>(null)

  const API_KEY = "420995170c61c98b9cb39c50259264e8"

  useEffect(()=>{

    async function loadMovie(){

      try{

        const response = await api.get(
          `/movie/${id}?api_key=${API_KEY}&language=pt-BR`
        )

        setMovie(response.data)

      }catch(error){

        console.log("Erro ao buscar filme:", error)

      }

    }

    loadMovie()

  },[id])

  function renderStars(vote:number){

    const stars = Math.round(vote / 2)
    return "⭐".repeat(stars)

  }

  if(!movie){

    return <h2 className="loading-text">Carregando...</h2>

  }

  return(

    <div className="details-container">

      <button className="back-btn" onClick={()=>navigate(-1)}>
        ← Voltar
      </button>

      <div className="details-content">

        <img
          className="details-poster"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />

        <div className="details-info">

          <h1>{movie.title}</h1>

          <p className="details-overview">
            {movie.overview}
          </p>

          <p>
            <strong>Nota:</strong> {movie.vote_average.toFixed(1)} / 10
          </p>

          <p className="stars-line">
            <strong>Avaliação:</strong> {renderStars(movie.vote_average)}
          </p>

          <p>
            <strong>Lançamento:</strong> {movie.release_date}
          </p>

          {movie.genres && (
            <p>
              <strong>Gêneros:</strong>{" "}
              {movie.genres.map((g:any)=>g.name).join(", ")}
            </p>
          )}

        </div>

      </div>

    </div>

  )

}

export default MovieDetails