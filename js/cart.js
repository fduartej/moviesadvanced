const MovieGridComponent = ({ moviesData }) => (
  <div className="movie-grid">
    {cardsData.map((card, index) => (
      <MovieComponent
        title={card.title}
        price={card.price}
        image={card.image}
        category={card.category}
        key={index}
      />
    ))}
  </div>
);

const MovieComponent(){
    <img src="${pelicula.image}" alt="${pelicula.title}" />
      <div class="movie-info">
        <h3>${pelicula.title}</h3>
        <p>${pelicula.description}</p>
        <div class="movie-details">
          <span class="year">${pelicula.year}</span>
          <span class="genre">${pelicula.genre}</span>
          <span class="rating">⭐ ${pelicula.rating}</span>
        </div>
      </div>
}
