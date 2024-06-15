
interface PaginationProps {
    page: number;
    limit: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    onLimitChange: (limit: number) => void;
}
export function Pagination({
    page,
    limit,
    totalPages,
    onPageChange,
    onLimitChange,
}: PaginationProps) {

    const handlePageChange = (newPage: number) => {
        if (!isNaN(newPage)) {
            onPageChange(newPage);
        }
    };

    const handleLimitChange = (newLimit: string) => {
        const parsedLimit = parseInt(newLimit, 10);
        if (!isNaN(parsedLimit)) {
            onLimitChange(parsedLimit);
        }
    };


    return (
        <div>
            <div>
                <label htmlFor="limit">Items per page:</label>
                <select
                    id="limit"
                    value={limit}
                    onChange={(e) => handleLimitChange(e.target.value)}
                >
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
            </div>
            <div>
                <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
                    Previous
                </button>
                <span>
                    Page {page} of {totalPages}
                </span>
                <button onClick={() => handlePageChange(page + 1)} disabled={page === totalPages}>
                    Next
                </button>
            </div>
        </div>
    );
}
