import { ChangeEvent } from "react";
import { MovieFilter, useMovieFilters } from "../hooks/useMovieFilters";

interface MovieFiltersProps {
    filters: MovieFilter;
}

export function MovieFilters({ filters }: MovieFiltersProps) {
    const { updateFilters } = useMovieFilters();


    const handleGenreChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const selectedGenres = Array.from(e.target.selectedOptions, (option) => option.value);
        updateFilters({ genres: selectedGenres });
    };

    const handleRatingRangeChange = (e: ChangeEvent<HTMLInputElement>) => {
        const ratingRange = e.target.value.split(',').map(Number) as [number, number];
        updateFilters({ ratingRange });
    };

    const handleYearRangeChange = (e: ChangeEvent<HTMLInputElement>) => {
        const yearRange = e.target.value.split(',').map(Number) as [number, number];
        updateFilters({ yearRange });
    };
    return (
        <div>
            <select multiple onChange={handleGenreChange} value={filters.genres || []}>
                <option value="action">Action</option>
                <option value="comedy">Comedy</option>
                {/* Add more genre options as needed */}
            </select>
            <input
                type="text"
                placeholder="Rating Range (e.g., 6,8)"
                onChange={handleRatingRangeChange}
                value={filters.ratingRange?.join(',')}
            />
            <input
                type="text"
                placeholder="Year Range (e.g., 1990,2023)"
                onChange={handleYearRangeChange}
                value={filters.yearRange?.join(',')}
            />
        </div>
    );
}
