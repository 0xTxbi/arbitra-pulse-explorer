import { useState, useEffect } from "react";

const useUpcomingEarnings = () => {
	const [upcomingEarningsInfo, setUpcomingEarningsInfo] = useState(null);

	const [upcomingEarningsLoading, setUpcomingEarningsLoading] =
		useState<boolean>(false);
	const [upcomingEarningsError, setUpcomingEarningsError] = useState<
		string | null
	>(null);

	// function to fetch upcoming earnings
	const fetchUpcomingEarnings = async () => {
		try {
			setUpcomingEarningsLoading(true);

			const response = await fetch(
				"https://quantscrape.fly.dev/upcoming-earnings"
			);

			// check if request was successful – status code 200
			if (response.ok) {
				const data = await response.json();

				setUpcomingEarningsInfo(data);
				// reset error state
				setUpcomingEarningsError(null);
			} else {
				// handle non-successful response
				setUpcomingEarningsError(
					"Failed to fetch upcoming earnings"
				);
			}
		} catch (error) {
			// handle any unexpected errors during the request
			setUpcomingEarningsError(
				"An error occurred while fetching upcoming earnings"
			);
		} finally {
			// set loading back to false after the request completion
			setUpcomingEarningsLoading(false);
		}
	};

	// automatically fetch stock sentiment when the component loads
	useEffect(() => {
		fetchUpcomingEarnings();
	}, []);

	return {
		fetchUpcomingEarnings,
		upcomingEarningsInfo,
		upcomingEarningsLoading,
		upcomingEarningsError,
	};
};

export default useUpcomingEarnings;
