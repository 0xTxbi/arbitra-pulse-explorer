import { useState, useEffect } from "react";

const useMarketGainers = () => {
	const [marketGainersInfo, setMarketGainersInfo] = useState(null);

	const [marketGainersLoading, setMarketGainersLoading] =
		useState<boolean>(false);
	const [marketGainersError, setMarketGainersError] = useState<
		string | null
	>(null);

	// function to fetch market gainers
	const fetchMarketGainers = async () => {
		try {
			setMarketGainersLoading(true);

			const response = await fetch(
				"https://arbitra-pulse-stock-info.fly.dev/market-gainers"
			);

			// check if request was successful – status code 200
			if (response.ok) {
				const data = await response.json();

				setMarketGainersInfo(data.market_gainers);
				// reset error state
				setMarketGainersError(null);
			} else {
				// handle non-successful response
				setMarketGainersError(
					"Failed to fetch upcoming earnings"
				);
			}
		} catch (error) {
			// handle any unexpected errors during the request
			setMarketGainersError(
				"An error occurred while fetching upcoming earnings"
			);
		} finally {
			// set loading back to false after the request completion
			setMarketGainersLoading(false);
		}
	};

	// automatically fetch market gainers when the component loads
	useEffect(() => {
		fetchMarketGainers();
	}, []);

	return {
		fetchMarketGainers,
		marketGainersInfo,
		marketGainersLoading,
		marketGainersError,
	};
};

export default useMarketGainers;
