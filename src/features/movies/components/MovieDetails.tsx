import { useMovieDetails } from "../hooks/useMovieDetails";

export function MovieDetails() {
    const movieId = 1;

    const { movie, isLoading, error } = useMovieDetails(movieId);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!movie) {
        return <div>Movie not found</div>;
    }

    const { name } = movie


    return (
        <section>
            <h1>{name}</h1>
        </section>
    );
}