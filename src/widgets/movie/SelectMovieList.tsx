
interface SelectMovieListProps {
	limit: number;
	handleLimitChange: (limit: number) => void;
}

export function SelectMovieList({limit, handleLimitChange}: SelectMovieListProps) {
    return (
        <div>
            <label htmlFor="limit">Movies per page:</label>
            <select
                id="limit"
                value={limit}
                onChange={(e) => handleLimitChange(parseInt(e.target.value, 10))}
            >
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
            </select>
        </div>)
}
