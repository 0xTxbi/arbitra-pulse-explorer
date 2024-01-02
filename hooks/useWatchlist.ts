import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

const useWatchlist = () => {
	const [cookies] = useCookies(["token"]);
	console.log(cookies.token);

	const [watchlistInfo, setWatchlistInfo] = useState(null);

	const [watchlistLoading, setWatchlistLoading] =
		useState<boolean>(false);
	const [watchlistError, setWatchlistError] = useState<string | null>(
		null
	);

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

	// automatically fetch stock info when the component loads
	useEffect(() => {
		fetchWatchlist();
	}, []);

	return { watchlistInfo, watchlistLoading, watchlistError };
};

export default useWatchlist;
