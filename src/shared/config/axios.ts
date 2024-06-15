import axios from 'axios';
import { KINOPOISK_API_KEY, KINOPOISK_API_URL } from '../constants';

export const apiClient = axios.create({
	baseURL: KINOPOISK_API_URL,
	headers: {
		'X-API-KEY': KINOPOISK_API_KEY,
	},
});
