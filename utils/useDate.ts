// import the necessary hooks from the React library
import { useState, useEffect } from "react";

// create a custom hook named useDate
export const useDate = () => {
	// initialize the state variable 'today' using the useState hook
	const [today, setDate] = useState(new Date());

	// useEffect hook to update the date every second
	useEffect(() => {
		// set up a timer to update the date every second
		const timer = setInterval(() => {
			setDate(new Date());
		}, 1000);

		// clean up the timer on component unmount
		return () => {
			clearInterval(timer);
		};
	}, []); // empty dependency array ensures the effect runs only on mount and unmount

	// extract the day from the current date
	const day = today.toLocaleDateString("en", { weekday: "long" });

	// format the date as a string including the day, date, and month
	const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(
		"en",
		{ month: "long" }
	)}`;

	// extract the hour, minute, and second from the current time
	const hour = today.getHours();
	const minute = today.getMinutes();
	const second = today.getSeconds();

	// determine the time of day based on the hour
	let timeOfDay;
	if (hour < 12) {
		timeOfDay = "morning";
	} else if (hour < 17) {
		timeOfDay = "afternoon";
	} else {
		timeOfDay = "evening";
	}

	// format the time as a string in 12-hour clock format
	const time = today.toLocaleTimeString("en", {
		hour: "numeric",
		minute: "numeric",
		second: "numeric",
		hour12: true,
	});

	// return an object containing the formatted date, time, and time of day
	return {
		date,
		time,
		timeOfDay,
	};
};
