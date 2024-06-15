import { MovieFilter } from "../hooks/useMovieFilters";
import { Doc } from "../types/movie";

export function filterMovies(movies: Doc[], filters: MovieFilter) {
    return movies.filter((movie) => {
        const matchesGenre = !filters.genres || filters.genres.some(genre => movie.genres?.some(g => g.name === genre));
        const matchesRating = !filters.ratingRange || (movie.rating.kp >= filters.ratingRange[0] && movie.rating.kp <= filters.ratingRange[1]);
        const matchesYear = !filters.yearRange || (movie.year >= filters.yearRange[0] && movie.year <= filters.yearRange[1]);
    
        return matchesGenre && matchesRating && matchesYear;
      });
    
}
