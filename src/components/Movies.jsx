function ListOfMovies({ movies }) {
    return (
        <ul className="movies">
            {
                movies.map(movie => (
                    <li className="movie" key={movie.id}>

                        <div class="cards">
                            <img src={movie.poster} alt={movie.Title} />
                            <div class="card__content">
                                <h1 class="text-title">{movie.title}</h1>
                                <p class="card__description">
                                    {movie.year}
                                </p>
                            </div>
                        </div>



                    </li>
                ))
            }
        </ul>
    )
}

export function NoResults() {
    return (
        <p className='error'>No se encontraron peliculas para esta busqueda</p>
    )
}
export function Movies({ movies }) {

    const hasMovies = movies?.length > 0
    return (
        hasMovies
            ? <ListOfMovies movies={movies} />
            : <NoResults />
    )
}