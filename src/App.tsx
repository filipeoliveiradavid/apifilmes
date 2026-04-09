import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./page/Home"
import MovieDetails from "./page/MovieDetails"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App