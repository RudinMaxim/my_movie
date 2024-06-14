import { useState } from 'react';

interface UsePaginationProps {
	initialPage?: number;
	initialLimit?: number;
	totalItems: number;
}

export function usePagination({
	initialPage = 1,
	initialLimit = 10,
	totalItems,
}: UsePaginationProps) {
	const [page, setPage] = useState(() => {
		const parsedPage = typeof initialPage === 'number' ? initialPage : 1;
		return parsedPage;
	});
	const [limit, setLimit] = useState(() => {
		const parsedLimit = typeof initialLimit === 'number' ? initialLimit : 10;
		return parsedLimit;
	});

	const totalPages = Math.ceil(totalItems / limit);

	const handlePageChange = (newPage: number) => {
		setPage(newPage);
	};

	const handleLimitChange = (newLimit: number) => {
		setLimit(newLimit);
		setPage(1);
	};

	return { page, limit, totalPages, handlePageChange, handleLimitChange };
}
