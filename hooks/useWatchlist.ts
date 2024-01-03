import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

const useWatchlist = () => {
	const [cookies] = useCookies(["token"]);

	const [watchlistInfo, setWatchlistInfo] = useState(null);
	const [watchlistLoading, setWatchlistLoading] =
		useState<boolean>(false);
	const [watchlistError, setWatchlistError] = useState<string | null>(
		null
	);
	const [watchlistAddSuccess, setWatchlistAddSuccess] =
		useState<boolean>(false);

	// function to fetch stock information
	const fetchWatchlist = async () => {
		try {
			setWatchlistLoading(true);

			const response = await fetch(
				`https://arbitra-pulse-auth.fly.dev/watchlist`,
				{
					headers: {
						Authorization: `Bearer ${cookies.token}`,
					},
				}
			);

			// check if request was successful – status code 200
			if (response.ok) {
				const data = await response.json();

				setWatchlistInfo(data);
				// reset error state
				setWatchlistError(null);
			} else {
				// handle non-successful response
				setWatchlistError(
					"Failed to fetch stock information"
				);
			}
		} catch (error) {
			// handle any unexpected errors during the request
			setWatchlistError(
				"An error occurred while fetching stock information"
			);
		} finally {
			// set loading back to false after the request completion
			setWatchlistLoading(false);
		}
	};

	// function to add stock symbol to watchlist
	const addToWatchlist = async (stockSymbol: string) => {
		try {
			setWatchlistLoading(true);

			const response = await fetch(
				`https://arbitra-pulse-stock-info.fly.dev/watchlist/add/${stockSymbol}`,
				{
					method: "POST",
					headers: {
						Authorization: `Bearer ${cookies.token}`,
					},
				}
			);

			if (response.ok) {
				setWatchlistAddSuccess(true);
				// reset error state
				setWatchlistError(null);
			} else {
				setWatchlistError(
					`Failed to add ${stockSymbol} to your watchlist. Please try again`
				);
			}
		} catch (error) {
			setWatchlistError(
				`An error occurred while adding ${stockSymbol} to watchlist`
			);
		} finally {
			setWatchlistLoading(false);
		}
	};

	// automatically fetch stock info when the component loads
	useEffect(() => {
		fetchWatchlist();
	}, []);

	return {
		watchlistInfo,
		addToWatchlist,
		watchlistAddSuccess,
		watchlistLoading,
		watchlistError,
	};
};

export default useWatchlist;
