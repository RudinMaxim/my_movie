import { useEffect, useState } from 'react';
import { getMovies } from '../api/api.movies';
import type { Doc, GetMoviesResponse } from '../types/movie';

interface UseMovieListProps {
	page: number;
	limit: number;
}

export function useMovieList({ page, limit }: UseMovieListProps) {
	const [movies, setMovies] = useState<Doc[]>([]);
	const [total, setTotal] = useState<number>(0);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchMovies = async () => {
			setLoading(true);
			setError(null);

			try {
				const { docs, total }: GetMoviesResponse = await getMovies({
					page,
					limit,
				});
				setMovies(docs);
				setTotal(total);
			} catch (err) {
				setError('Failed to fetch movies');
			} finally {
				setLoading(false);
			}
		};

		fetchMovies();
	}, [page, limit]);

	return { movies, total, loading, error };
}
