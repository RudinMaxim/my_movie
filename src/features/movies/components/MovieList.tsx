import { MovieCard, MovieFilters } from ".";
import { Pagination } from "../../../shared/components/Pagination";
import { useMovieList } from "../hooks/useMovieList";

export function MovieList() {
    const { movies, loading, error, totalPages, page, limit, handlePageChange, handleLimitChange, filters } = useMovieList();


    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }


    return (
        <div>
            <MovieFilters filters={filters} />
            <div>
                <label htmlFor="limit">Movies per page:</label>
                <select
                    id="limit"
                    value={limit}
                    onChange={(e) => handleLimitChange(parseInt(e.target.value, 10))}
                >
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
            </div>
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
