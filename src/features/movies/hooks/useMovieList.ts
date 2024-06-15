import { useEffect, useState } from 'react';
import { usePagination } from '../../../shared/hook/usePagination';
import { getMovies } from '../api/api.movies';
import type { Doc, GetMoviesResponse } from '../types/movie';
import { useMovieFilters } from './useMovieFilters';

export type TUseMovieList = ReturnType<typeof useMovieList>;

export function useMovieList() {
	const [movies, setMovies] = useState<Doc[]>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const { applyFilters, filters } = useMovieFilters();
	
	const { page, limit, totalPages, handlePageChange, handleLimitChange } =
		usePagination({
			initialLimit: 50,
			totalItems: 0,
		});

	useEffect(() => {
		const fetchMovies = async () => {
			setLoading(true);
			setError(null);

			try {
				const response: GetMoviesResponse = await getMovies({
					page,
					limit,
				});

				const filteredMovies = applyFilters(response.docs);

				setMovies(filteredMovies);
				handleLimitChange(response.limit);
				handlePageChange(response.page);
			} catch (err) {
				setError('Failed to fetch movies');
			} finally {
				setLoading(false);
			}
		};

		fetchMovies();
	}, [page, limit, applyFilters, handlePageChange, handleLimitChange]);

	return {
		movies,
		loading,
		error,
		totalPages,
		page,
		limit,
		handlePageChange,
		handleLimitChange,
		filters,
	};
}
