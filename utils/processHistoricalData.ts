// process stock historical data for proper usage
export function processHistoricalData(historicalData: Array<any>) {
	// Convert dates to a format that can be compared
	const convertedHistoricalData = historicalData.map((data) => {
		const date = new Date(data.date);
		const year = date.getFullYear();
		// months in JS are zero indexed
		const month = ("0" + (date.getMonth() + 1)).slice(-2);
		const day = ("0" + date.getDate()).slice(-2);
		return {
			time: `${year}-${month}-${day}`,
			value: data.close_price,
		};
	});

	// sort by date
	const sortedConvertedHistoricalData = convertedHistoricalData.sort(
		(a, b) =>
			new Date(a.time).getTime() - new Date(b.time).getTime()
	);

	// filter out data where the close_price is null
	const filteredSortedHistoricalData =
		sortedConvertedHistoricalData.filter(
			(item) => item.value !== null
		);

	return filteredSortedHistoricalData;
}

/**
 * Function to get the earliest and latest dates from the returned historical data
 *
 * @param {Object[]} data - An array of historical data, each containing a 'time' property.
 * @returns {Object} An object containing the earliest and latest dates.
 */
export function getEarliestAndLatestDates(historicalData: { time: string }[]) {
	let earliestDate = historicalData.reduce((earliest, current) =>
		current.time < earliest.time ? current : earliest
	).time;
	let latestDate = historicalData.reduce((latest, current) =>
		current.time > latest.time ? current : latest
	).time;

	return { earliestDate, latestDate };
}
