//import withResults from "../mocks/with-results.json";
//import withNoResults from "../mocks/with-no-results.json";
import { searchMovies } from "../services/movies";
import { useState, useRef } from "react";

export function useMovies({ search }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const previousSearch = useRef(search);
  const getMovies = async () => {
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
  return { movies, getMovies, loading };
}
