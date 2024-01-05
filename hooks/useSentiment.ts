import { useState, useEffect } from "react";

const useSentiment = (ticker: string) => {
	const [sentimentInfo, setSentimentInfo] = useState(null);

	const [sentimentInfoLoading, setSentimentInfoLoading] =
		useState<boolean>(false);
	const [sentimentError, setSentimentError] = useState<string | null>(
		null
	);

	// function to fetch stock sentiment
	const fetchStockSentiment = async () => {
		try {
			setSentimentInfoLoading(true);

			const response = await fetch(
				`https://arbitra-pulse-sentiment.fly.dev/sentiment/${ticker}`
			);

			// check if request was successful – status code 200
			if (response.ok) {
				const data = await response.json();

				setSentimentInfo(data);
				// reset error state
				setSentimentError(null);
			} else {
				// handle non-successful response
				setSentimentError(
					"Failed to fetch stock sentiment"
				);
			}
		} catch (error) {
			// handle any unexpected errors during the request
			setSentimentError(
				"An error occurred while fetching this stock's sentiment"
			);
		} finally {
			// set loading back to false after the request completion
			setSentimentInfoLoading(false);
		}
	};

	// automatically fetch stock sentiment when the component loads
	useEffect(() => {
		fetchStockSentiment();
	}, [ticker]);

	return {
		fetchStockSentiment,
		sentimentInfo,
		sentimentInfoLoading,
		sentimentError,
	};
};

export default useSentiment;
