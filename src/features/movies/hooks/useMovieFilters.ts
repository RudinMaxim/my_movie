import { useCallback, useState } from 'react';
import { Doc } from '../types/movie';
import { filterMovies } from '../utils/filterMovies';

export type MovieFilter = {
	genres?: string[];
	ratingRange?: [number, number];
	yearRange?: [number, number];
};

export const useMovieFilters = () => {
	const [filters, setFilters] = useState<MovieFilter>({});

	const applyFilters = useCallback(
		(movies: Doc[]) => {
			return filterMovies(movies, filters);
		},
		[filters]
	);

	const updateFilters = (newFilters: Partial<MovieFilter>) => {
		setFilters((prev) => ({ ...prev, ...newFilters }));
	};

	return { filters, applyFilters, updateFilters };
};
