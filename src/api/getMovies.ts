import { apiClient } from '../config/axios';
import { GetMoviesResponse } from '../types/types.movie';

interface GetMoviesParams {
	page?: number;
	limit?: number;
}

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

export const searchMovies = async (
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
