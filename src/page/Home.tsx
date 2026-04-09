import { useEffect, useState } from "react"
import api from "../services/api"
import MovieCard from "../components/MovieCard"

function Home(){

  const [movies,setMovies] = useState<any[]>([])
  const [search,setSearch] = useState("")

  const API_KEY = "420995170c61c98b9cb39c50259264e8"

  useEffect(()=>{

    async function loadMovies(){

      const response = await api.get(
        `/movie/popular?api_key=${API_KEY}&language=pt-BR`
      )

      setMovies(response.data.results)

    }

    loadMovies()

  },[])

  async function handleSearch(e:any){

    e.preventDefault()

    if(!search) return

    const response = await api.get(
      `/search/movie?api_key=${API_KEY}&query=${search}`
    )

    setMovies(response.data.results)

  }

  return(

    <div className="home-container">

      <h1>🎬 Filmes Populares</h1>

      <form className="search-bar" onSubmit={handleSearch}>

        <input
          type="text"
          placeholder="Buscar filme..."
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
        />

        <button>Buscar</button>

      </form>

      {movies.length > 0 && (

        <div className="banner">

          <img
            src={`https://image.tmdb.org/t/p/original${movies[0].backdrop_path}`}
          />

          <div className="banner-info">

            <h2>{movies[0].title}</h2>

            <p>{movies[0].overview}</p>

          </div>

        </div>

      )}

      <div className="movies-container">

        {movies.map(movie => (

          <MovieCard
            key={movie.id}
            movie={movie}
          />

        ))}

      </div>

    </div>

  )

}

export default Home