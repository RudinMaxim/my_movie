import { useEffect, useState } from "react";
import { Pagination } from "../../common/components/Pagination";
import { usePagination } from "../../common/hooks/usePagination";
import { useMovieList } from "../hooks/useMovieList";
import { MovieCard } from "./MovieCard";

export function MovieList() {
    const [totalItems, setTotalItems] = useState(100);

    const { page, limit, totalPages, handlePageChange, handleLimitChange } = usePagination({
        initialPage: 1,
        initialLimit: 10,
        totalItems: totalItems,
    });
    const { movies, loading, error, total } = useMovieList({ page, limit });

    useEffect(() => {
        if (total !== undefined) {
            setTotalItems(total);
        }
    }, [total]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }


    return (
        <div>
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
                    <MovieCard key={movie.id} movie={movie} />
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
