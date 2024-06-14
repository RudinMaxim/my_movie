import { MovieList } from "../features/movies/components";

export default function MoviesPage() {
    return (
        <div>
            <h1>Movies</h1>
            {/* <MovieFilters /> */}
            <MovieList />
        </div>
    );
}
