import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

const useDashboard = (ticker: string) => {
	const [cookies] = useCookies(["token"]);

	const [dashboardInfo, setDashboardInfo] = useState(null);
	const [dashboardInfoLoading, setDashboardInfoLoading] =
		useState<boolean>(false);
	const [dashboardInfoError, setDashboardInfoError] = useState<
		string | null
	>(null);

	// function to fetch user's dashboard
	const fetchDashboard = async () => {
		try {
			setDashboardInfoLoading(true);

			const response = await fetch(
				"https://arbitra-pulse-auth.fly.dev/dashboard",
				{
					headers: {
						Authorization: `Bearer ${cookies.token}`,
					},
				}
			);

			// check if request was successful – status code 200
			if (response.ok) {
				const data = await response.json();

				setDashboardInfo(data);
				// reset error state
				setDashboardInfoError(null);
			} else {
				// handle non-successful response
				setDashboardInfoError(
					"Failed to fetch your dashboard info"
				);
			}
		} catch (error) {
			// handle any unexpected errors during the request
			setDashboardInfoError(
				"An error occurred while retrieving your dashboard info"
			);
		} finally {
			// set loading back to false after the request completion
			setDashboardInfoLoading(false);
		}
	};

	// automatically retrieve user's dashboard when the component loads
	useEffect(() => {
		fetchDashboard();
	}, [ticker]);

	return {
		fetchDashboard,
		dashboardInfo,
		dashboardInfoLoading,
		dashboardInfoError,
	};
};

export default useDashboard;
