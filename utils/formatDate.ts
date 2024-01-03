export function formatDate(inputDate: string): string {
	const date = new Date(inputDate);

	// extracting day, month, and year from the date object
	const day = date.getDate();
	const month = date.toLocaleString("default", { month: "long" });
	const year = date.getFullYear();

	// determine the suffix for the day
	let daySuffix: string;
	if (day >= 11 && day <= 13) {
		daySuffix = "th";
	} else {
		switch (day % 10) {
			case 1:
				daySuffix = "st";
				break;
			case 2:
				daySuffix = "nd";
				break;
			case 3:
				daySuffix = "rd";
				break;
			default:
				daySuffix = "th";
		}
	}

	const formattedDate = `${day}${daySuffix} ${month}, ${year}`;

	return formattedDate;
}
