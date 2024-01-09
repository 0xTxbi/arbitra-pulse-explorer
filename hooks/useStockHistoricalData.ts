import { useState, useEffect } from "react";

const useStockHistoricalData = (ticker: string) => {
	const [stockHistoricalDataInfo, setStockHistoricalDataInfo] =
		useState(null);

	const [stockHistoricalDataLoading, setStockHistoricalDataLoading] =
		useState<boolean>(false);
	const [stockHistoricalDataError, setStockHistoricalDataError] =
		useState<string | null>(null);

	// function to fetch stock historical
	const fetchStockHistoricalData = async (ticker) => {
		try {
			setStockHistoricalDataLoading(true);

			const response = await fetch(
				`https://arbitra-pulse-stock-info.fly.dev/historical-data/${ticker}`
			);

			// check if request was successful – status code 200
			if (response.ok) {
				const data = await response.json();

				setStockHistoricalDataInfo(data);
				// reset error state
				setStockHistoricalDataError(null);
			} else {
				// handle non-successful response
				setStockHistoricalDataError(
					"Failed to fetch stock information"
				);
			}
		} catch (error) {
			// handle any unexpected errors during the request
			setStockHistoricalDataError(
				"An error occurred while fetching stock information"
			);
		} finally {
			// set loading back to false after the request completion
			setStockHistoricalDataLoading(false);
		}
	};

	// automatically fetch stock historical data when the component loads
	useEffect(() => {
		fetchStockHistoricalData(ticker);
	}, [ticker]);

	return {
		stockHistoricalDataInfo,
		stockHistoricalDataLoading,
		stockHistoricalDataError,
	};
};

export default useStockHistoricalData;
