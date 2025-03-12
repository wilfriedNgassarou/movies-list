import { MovieItem } from "./components/movie"
import { movies } from "./constants/movies"

function App() {
  return (
    <section className="w-full h-dvh flex gap-4 justify-center items-center">
      <div className="fixed inset-0 lg:hidden z-10 bg-white flex justify-center items-center">
        <span className="text-lg">
          Please, use a large screen !
        </span>
      </div>
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </section>
  )
}

export default App
