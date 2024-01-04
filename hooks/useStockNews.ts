import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

const useStockNews = (ticker: string) => {
	const [cookies] = useCookies(["token"]);

	const [stockNews, setStockNews] = useState(null);
	const [stockNewsLoading, setStockNewsLoading] =
		useState<boolean>(false);
	const [stockNewsError, setStockNewsError] = useState<string | null>(
		null
	);

	// function to fetch news about a stock
	const fetchStockNews = async () => {
		try {
			setStockNewsLoading(true);

			const response = await fetch(
				`https://arbitra-pulse-news.fly.dev/news/${ticker}`,
				{
					headers: {
						Authorization: `Bearer ${cookies.token}`,
					},
				}
			);

			// check if request was successful – status code 200
			if (response.ok) {
				console.log(response);
				const data = await response.json();

				setStockNews(data);
				// reset error state
				setStockNewsError(null);
			} else {
				// handle non-successful response
				setStockNewsError(
					"Failed to fetch news for this stock"
				);
			}
		} catch (error) {
			// handle any unexpected errors during the request
			setStockNewsError(
				"An error occurred while fetching news for this stock"
			);
		} finally {
			// set loading back to false after the request completion
			setStockNewsLoading(false);
		}
	};

	// automatically retrieve stock news when the component loads
	useEffect(() => {
		fetchStockNews();
	}, [ticker]);

	return {
		fetchStockNews,
		stockNews,
		stockNewsLoading,
		stockNewsError,
	};
};

export default useStockNews;
