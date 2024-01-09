import React, { useEffect, useRef } from "react";
import { createChart } from "lightweight-charts";
import useStockHistoricalData from "@/hooks/useStockHistoricalData";
import { Box, Skeleton } from "@mantine/core";

interface StockChartProps {
	width?: number;
	height?: number;
	ticker: string;
}

const StockChart: React.FC<StockChartProps> = ({ width, height, ticker }) => {
	const chartContainerRef = useRef<HTMLDivElement | null>(null);

	const {
		stockHistoricalDataInfo,
		stockHistoricalDataLoading,
		stockHistoricalDataError,
	} = useStockHistoricalData(ticker);

	console.log(
		stockHistoricalDataInfo,
		stockHistoricalDataLoading,
		stockHistoricalDataError
	);

	useEffect(() => {
		if (chartContainerRef.current) {
			const chart = createChart(chartContainerRef.current, {
				width,
				height,
				layout: {
					background: {
						color: "transparent",
					},
					textColor: "#d1d4dc",
				},
				grid: {
					vertLines: {
						visible: false,
					},
					horzLines: {
						color: "rgba(42, 46, 57, 0.5)",
					},
				},
				rightPriceScale: {
					borderVisible: true,
				},
				timeScale: {
					borderVisible: false,
				},
				crosshair: {
					horzLine: {
						visible: false,
					},
				},
			});
			const lineSeries = chart.addLineSeries();

			// sample data
			const data = [
				{ time: "2018-10-19", value: 26.19 },
				{ time: "2018-10-22", value: 25.87 },
				{ time: "2018-10-23", value: 25.83 },
				{ time: "2018-10-24", value: 25.78 },
				{ time: "2018-10-25", value: 25.82 },
				{ time: "2018-10-26", value: 25.81 },
				{ time: "2018-10-29", value: 25.82 },
				{ time: "2018-10-30", value: 25.71 },
				{ time: "2018-10-31", value: 25.82 },
				{ time: "2018-11-01", value: 25.72 },
				{ time: "2018-11-02", value: 25.74 },
				{ time: "2018-11-05", value: 25.81 },
				{ time: "2018-11-06", value: 25.75 },
				{ time: "2018-11-07", value: 25.73 },
				{ time: "2018-11-08", value: 25.75 },
				{ time: "2018-11-09", value: 25.75 },
				{ time: "2018-11-12", value: 25.76 },
				{ time: "2018-11-13", value: 25.8 },
				{ time: "2018-11-14", value: 25.77 },
				{ time: "2018-11-15", value: 25.75 },
				{ time: "2018-11-16", value: 25.75 },
				{ time: "2018-11-19", value: 25.75 },
				{ time: "2018-11-20", value: 25.72 },
				{ time: "2018-11-21", value: 25.78 },
				{ time: "2018-11-23", value: 25.72 },
				{ time: "2018-11-26", value: 25.78 },
				{ time: "2018-11-27", value: 25.85 },
				{ time: "2018-11-28", value: 25.85 },
				{ time: "2018-11-29", value: 25.55 },
				{ time: "2018-11-30", value: 25.41 },
				{ time: "2018-12-03", value: 25.41 },
				{ time: "2018-12-04", value: 25.42 },
				{ time: "2018-12-06", value: 25.33 },
				{ time: "2018-12-07", value: 25.39 },
				{ time: "2018-12-10", value: 25.32 },
				{ time: "2018-12-11", value: 25.48 },
				{ time: "2018-12-12", value: 25.39 },
				{ time: "2018-12-13", value: 25.45 },
				{ time: "2018-12-14", value: 25.52 },
				{ time: "2018-12-17", value: 25.38 },
				{ time: "2018-12-18", value: 25.36 },
				{ time: "2018-12-19", value: 25.65 },
				{ time: "2018-12-20", value: 25.7 },
				{ time: "2018-12-21", value: 25.66 },
				{ time: "2018-12-24", value: 25.66 },
				{ time: "2018-12-26", value: 25.65 },
				{ time: "2018-12-27", value: 25.66 },
				{ time: "2018-12-28", value: 25.68 },
				{ time: "2018-12-31", value: 25.77 },
				{ time: "2019-01-02", value: 25.72 },
				{ time: "2019-01-03", value: 25.69 },
				{ time: "2019-01-04", value: 25.71 },
				{ time: "2019-01-07", value: 25.72 },
				{ time: "2019-01-08", value: 25.72 },
				{ time: "2019-01-09", value: 25.66 },
				{ time: "2019-01-10", value: 25.85 },
				{ time: "2019-01-11", value: 25.92 },
				{ time: "2019-01-14", value: 25.94 },
				{ time: "2019-01-15", value: 25.95 },
				{ time: "2019-01-16", value: 26.0 },
				{ time: "2019-01-17", value: 25.99 },
				{ time: "2019-01-18", value: 25.6 },
				{ time: "2019-01-22", value: 25.81 },
				{ time: "2019-01-23", value: 25.7 },
				{ time: "2019-01-24", value: 25.74 },
				{ time: "2019-01-25", value: 25.8 },
			];

			lineSeries.setData(data);
		}
	}, []);

	return (
		<Box h="100%">
			{stockHistoricalDataLoading ? (
				<Skeleton
					height="100%"
					width="100%"
				/>
			) : (
				<div
					ref={chartContainerRef}
					style={{
						width: "100%",
						height: "100%",
						padding: 0,
						backgroundColor: "transparent",
					}}
				/>
			)}
		</Box>
	);
};

export default StockChart;
