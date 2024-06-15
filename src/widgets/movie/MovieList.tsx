import { MovieCard } from "..";
import { useMovieList } from "../../features/movies/hooks/useMovieList";
import { Pagination } from "../../shared/components/Pagination";
import { SelectMovieList } from "./SelectMovieList";

export function MovieList() {
    const { movies, loading, error, totalPages, page, limit, handlePageChange, handleLimitChange, filters } = useMovieList();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <SelectMovieList limit={limit} handleLimitChange={handleLimitChange} />
            <div>
                {movies.map((movie) => (
                    <MovieCard key={`MovieCard__${movie.id}__${movie.name}`} movie={movie} />
                ))}
            </div>
            <Pagination
                page={page}
                limit={limit}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                onLimitChange={handleLimitChange}
            />
        </div>
    );
}