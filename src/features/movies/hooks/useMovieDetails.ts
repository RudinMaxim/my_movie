import { useEffect, useState } from 'react';
import { getMovieDetailsByID } from '../api/api.movies';
import { Doc } from '../types/movie';

interface UseMovieDetailsResult {
	movie: Doc | null;
	isLoading: boolean;
	error: string | null;
}

export function useMovieDetails(movieId: number): UseMovieDetailsResult {
	const [movie, setMovie] = useState<Doc | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchMovieDetails = async () => {
			try {
				setIsLoading(true);
				setError(null);

				if (!movieId || movieId <= 0) {
					throw new Error('No movie ID provided');
				}

				const response = await getMovieDetailsByID(movieId);
				setMovie(response.docs[0]);
			} catch (err) {
				if (err instanceof Error) {
					setError(err.message);
				} else {
					setError('An unexpected error occurred');
				}
			} finally {
				setIsLoading(false);
			}
		};

		fetchMovieDetails();
	}, [movieId]);

	return { movie, isLoading, error };
}
