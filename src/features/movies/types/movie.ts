export interface GetMoviesResponse {
	docs: Doc[];
	total: number;
	limit: number;
	page: number;
	pages: number;
}

export interface Doc {
	id: number;
	name: string;
	alternativeName?: string;
	type: string;
	typeNumber: number;
	year: number;
	description: string;
	shortDescription?: string;
	status?: string;
	rating: Rating;
	votes: Rating;
	movieLength?: number;
	totalSeriesLength?: number;
	seriesLength?: number;
	ratingMpaa?: string;
	ageRating?: number;
	poster: Poster;
	genres?: Genre[];
	countries: Genre[];
	releaseYears?: ReleaseYear[];
	top10?: number;
	top250?: number;
	isSeries: boolean;
	ticketsOnSale: boolean;
	enName?: string;
	backdrop?: Poster;
}

export interface ReleaseYear {
	start: number;
	end?: number;
}

export interface Genre {
	name: string;
}

export interface Poster {
	url: string;
	previewUrl: string;
}

export interface Rating {
	kp: number;
	imdb: number;
	filmCritics: number;
	russianFilmCritics: number;
	await: number;
}
