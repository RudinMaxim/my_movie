import { apiClient } from '../../../shared/config/axios';
import { GetMoviesResponse } from '../types/movie';

export type GetMoviesParams = {
	page?: number;
	limit?: number;
};

/**
 * Fetches a list of movies from the API.
 *
 * @param {params} - An optional object containing pagination parameters.
 * @param params.page - The page number to fetch.
 * @param params.limit - The number of movies to fetch per page.
 * @returns A promise that resolves to the response data containing the list of movies.
 * @throws {Error} If the page or limit parameters are not valid numbers.
 * @throws {Error} If the API response is not successful or does not contain the expected data.
 */
export const getMovies = async (
	params: GetMoviesParams = {}
): Promise<GetMoviesResponse> => {
	if (params.page && typeof params.page !== 'number') {
		throw new Error('Page parameter must be a number');
	}
	if (params.limit && typeof params.limit !== 'number') {
		throw new Error('Limit parameter must be a number');
	}

	const response = await apiClient.get<GetMoviesResponse>(`/movie`, {
		params,
	});

	if (response.status !== 200) {
		throw new Error(response.statusText);
	}

	if (!response.data || !response.data.docs) {
		throw new Error('Invalid response data');
	}

	return response.data;
};

/**
 * Fetches the details of a movie by its ID.
 *
 * @param id - The ID of the movie to fetch.
 * @returns A promise that resolves to the response data containing the movie details.
 * @throws {Error} If the ID parameter is not a valid number.
 * @throws {Error} If the API response is not successful or does not contain the expected data.
 */
export const getMovieDetailsByID = async (
	id: number
): Promise<GetMoviesResponse> => {
	if (typeof id !== 'number') {
		throw new Error('ID parameter must be a number');
	}

	const response = await apiClient.get<GetMoviesResponse>(`/movie/${id}`);

	if (response.status !== 200) {
		throw new Error(response.statusText);
	}

	if (!response.data || !response.data.docs) {
		throw new Error('Invalid response data');
	}

	return response.data;
};

/**
 * Searches for movies based on the provided search parameters.
 *
 * @param params - An object containing the search parameters, including the query string, page, and limit.
 * @param params.query - The search query string.
 * @param params.page - The page number for pagination (optional).
 * @param params.limit - The number of results to return per page (optional).
 * @returns A promise that resolves to the response data containing the search results.
 * @throws {Error} If the page or limit parameters are not valid numbers, or if the query parameter is not a valid string.
 * @throws {Error} If the API response is not successful or does not contain the expected data.
 */
export const getMoviesByQuery = async (
	params: GetMoviesParams & { query: string }
): Promise<GetMoviesResponse> => {
	if (params.page && typeof params.page !== 'number') {
		throw new Error('Page parameter must be a number');
	}

	if (params.limit && typeof params.limit !== 'number') {
		throw new Error('Limit parameter must be a number');
	}

	if (typeof params.query !== 'string') {
		throw new Error('Query parameter must be a string');
	}

	const response = await apiClient.get<GetMoviesResponse>(`/movie/search`, {
		params,
	});

	if (!response.data || !response.data.docs) {
		throw new Error('Invalid response data');
	}

	return response.data;
};
