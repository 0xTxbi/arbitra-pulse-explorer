import { useState, useEffect } from "react";

const useStockInfo = (ticker: string) => {
	const [stockInfo, setStockInfo] = useState(null);

	const [stockInfoLoading, setStockInfoLoading] =
		useState<boolean>(false);
	const [stockError, setStockError] = useState<string | null>(null);

	// function to fetch stock information
	const fetchStockInfo = async () => {
		try {
			setStockInfoLoading(true);

			const response = await fetch(
				`https://arbitra-pulse-stock-info.fly.dev/stock/${ticker}`
			);

			// check if request was successful – status code 200
			if (response.ok) {
				const data = await response.json();

				setStockInfo(data);
				// reset error state
				setStockError(null);
			} else {
				// handle non-successful response
				setStockError(
					"Failed to fetch stock information"
				);
			}
		} catch (error) {
			// handle any unexpected errors during the request
			setStockError(
				"An error occurred while fetching stock information"
			);
		} finally {
			// set loading back to false after the request completion
			setStockInfoLoading(false);
		}
	};

	// automatically fetch stock info when the component loads
	useEffect(() => {
		fetchStockInfo();
	}, [ticker]);

	return { stockInfo, stockInfoLoading, stockError };
};

export default useStockInfo;
