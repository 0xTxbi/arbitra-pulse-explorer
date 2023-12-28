import { useState } from "react";

export function useStockSearch() {
	const [searchLoading, setSearchLoading] = useState(false);
	const [searchSuccess, setSearchSuccess] = useState(false);
	const [searchError, setSearchError] = useState(null);

	const searchStock = async (query: string) => {
		setSearchLoading(true);
		setSearchSuccess(false);
		setSearchError(null);

		try {
			const response = await fetch(
				`https://arbitra-pulse-stock-info.fly.dev/search/${query}`
			);
			const data = await response.json();

			setSearchSuccess(true);
			setSearchLoading(false);

			return data;
		} catch (err: any) {
			setSearchError(err);
			setSearchLoading(false);
		}
	};

	return { searchStock, searchLoading, searchSuccess, searchError };
}
