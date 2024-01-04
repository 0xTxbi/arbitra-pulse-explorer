import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import useNotification from "./useNotification";

const useWatchlist = () => {
	const [cookies] = useCookies(["token"]);

	const { updateNotification } = useNotification();
	const [watchlistInfo, setWatchlistInfo] = useState(null);
	const [watchlistLoading, setWatchlistLoading] =
		useState<boolean>(false);
	const [watchlistError, setWatchlistError] = useState<string | null>(
		null
	);
	const [watchlistAddSuccess, setWatchlistAddSuccess] =
		useState<boolean>(false);
	const [watchlistRemoveSuccess, setWatchlistRemoveSuccess] =
		useState<boolean>(false);

	// clear watchlist states
	const [clearWatchlistLoading, setClearWatchlistLoading] =
		useState<boolean>(false);
	const [watchlistClearSuccess, setWatchlistClearSuccess] =
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

	// function to remove stock symbol from watchlist
	const removeFromWatchlist = async (stockSymbol: string) => {
		try {
			setWatchlistLoading(true);

			const response = await fetch(
				`https://arbitra-pulse-stock-info.fly.dev/watchlist/remove/${stockSymbol}`,
				{
					method: "DELETE",
					headers: {
						Authorization: `Bearer ${cookies.token}`,
					},
				}
			);

			if (response.ok) {
				setWatchlistRemoveSuccess(true);
				// reset error state
				setWatchlistError(null);
			} else {
				setWatchlistError(
					`Failed to remove ${stockSymbol} from your watchlist. Please try again`
				);
			}
		} catch (error) {
			setWatchlistError(
				`An error occurred while removing ${stockSymbol} from your watchlist`
			);
		} finally {
			setWatchlistLoading(false);
		}
	};

	// function to clear watchlist
	const clearWatchlist = async () => {
		try {
			setClearWatchlistLoading(true);

			const response = await fetch(
				`https://arbitra-pulse-stock-info.fly.dev/watchlist/clear`,
				{
					method: "DELETE",
					headers: {
						Authorization: `Bearer ${cookies.token}`,
					},
				}
			);

			if (response.ok) {
				setWatchlistClearSuccess(true);
				// reset error state
				setWatchlistError(null);
			} else {
				setWatchlistError(
					`Failed to clear your watchlist. Please try again`
				);
			}
		} catch (error) {
			setWatchlistError(
				`An error occurred while clearing your watchlist`
			);
		} finally {
			setClearWatchlistLoading(false);
		}
	};

	// automatically fetch stock info when the component loads
	useEffect(() => {
		fetchWatchlist();
	}, []);

	useEffect(() => {
		if (watchlistAddSuccess) {
			updateNotification({
				loading: false,
				title: "Added to Watchlist",
				message: "This stock has been successfully added to your watchlist.",
				autoClose: 3000,
				withCloseButton: true,
			});
		}
	}, [watchlistAddSuccess]);

	return {
		watchlistInfo,
		addToWatchlist,
		clearWatchlist,
		watchlistAddSuccess,
		watchlistClearSuccess,
		watchlistLoading,
		clearWatchlistLoading,
		watchlistError,
	};
};

export default useWatchlist;
