import { useState, useEffect } from "react";

const useStockQuote = (ticker: string) => {
	const [stockQuoteInfo, setStockQuoteInfo] = useState(null);

	const [stockQuoteLoading, setStockQuoteLoading] =
		useState<boolean>(false);
	const [stockQuoteError, setStockQuoteError] = useState<string | null>(
		null
	);

	// function to fetch stock quote
	const fetchStockQuote = async (ticker) => {
		try {
			setStockQuoteLoading(true);

			const response = await fetch(
				`https://quantscrape.fly.dev/quote/${ticker}`
			);

			// check if request was successful – status code 200
			if (response.ok) {
				const data = await response.json();

				console.log(data);
				console.log(response);

				setStockQuoteInfo(data.stock_info);

				if (data.error) {
					setStockQuoteError(
						"Failed to fetch stock quote"
					);
				}
				// reset error state
				setStockQuoteError(null);
			} else {
				// handle non-successful response
				setStockQuoteError(
					"Failed to fetch stock quote"
				);
			}
		} catch (error) {
			// handle any unexpected errors during the request
			setStockQuoteError(
				"An error occurred while fetching stock quote"
			);
		} finally {
			// set loading back to false after the request completion
			setStockQuoteLoading(false);
		}
	};

	// automatically fetch stock quote when the component loads
	useEffect(() => {
		fetchStockQuote(ticker);
	}, [ticker]);

	return {
		fetchStockQuote,
		stockQuoteInfo,
		stockQuoteLoading,
		stockQuoteError,
	};
};

export default useStockQuote;
