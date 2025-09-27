// Suponiendo que moviesdb.json está disponible públicamente
const MOVIES_URL = "data/moviesdb.json";

function MovieCard({ movie }) {
  return (
    <div className="movie-item">
      <img src={movie.image} alt={movie.title} />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.description}</p>
        <div className="movie-details">
          <span className="year">{movie.year}</span>
          <span className="genre">{movie.genre}</span>
          <span className="rating">⭐ {movie.rating}</span>
        </div>
      </div>
    </div>
  );
}

function MovieGrid({ movies }) {
  return (
    <div className="movie-grid">
      {movies.map((movie, idx) => (
        <MovieCard key={idx} movie={movie} />
      ))}
    </div>
  );
}

function App() {
  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    fetch(MOVIES_URL)
      .then((res) => res.json())
      .then((data) => {
        /*const uniqueMovies = [];
        const ids = new Set();
        for (const m of data) {
          if (!ids.has(m.id)) {
            uniqueMovies.push(m);
            ids.add(m.id);
          }
        }
        setMovies(uniqueMovies);*/
        const allMovies = [];
        for (const m of data) {
          allMovies.push(m);
        }
        setMovies(allMovies);
      });
  }, []);

  return (
    <div>
      <h1>Movie Grid</h1>
      <MovieGrid movies={movies} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("moviesgrid"));
