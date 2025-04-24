//import withResults from "../mocks/with-results.json";
//import withNoResults from "../mocks/with-no-results.json";
import { searchMovies } from "../services/movies";
import { useState, useRef, useMemo } from "react";

export function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const previousSearch = useRef(search);
  const getMovies = useMemo(() => {
    return async ({ search }) => {
      if (search === previousSearch.current) return;
      try {
        setLoading(true);
        setError(null);
        previousSearch.current = search;
        const newMovies = await searchMovies({ search });
        setMovies(newMovies);
      } catch (error) {
        setError(error.message);
      } finally {
        // tanto en el try como en el catch se ejecuta el finally
        setLoading(false);
      }
    };
  }, []);
  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies;
  }, [sort, movies]);
  // useMemo es un hook que memoriza el resultado de una funcion y solo la vuelve a ejecutar si las dependencias cambian
  return { movies: sortedMovies, getMovies, loading, error };
}
