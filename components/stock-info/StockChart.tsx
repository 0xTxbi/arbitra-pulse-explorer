import React, { useEffect, useRef, useState } from "react";
import { createChart } from "lightweight-charts";
import useStockHistoricalData from "@/hooks/useStockHistoricalData";
import { Box, Skeleton } from "@mantine/core";
import {
	getEarliestAndLatestDates,
	processHistoricalData,
} from "@/utils/processHistoricalData";

interface StockChartProps {
	width?: number;
	height?: number;
	ticker: string;
}

const StockChart: React.FC<StockChartProps> = ({ width, height, ticker }) => {
	const [processedHistoricalData, setProcessedHistoricalData] =
		useState<any>();
	const [dateRange, setDateRange] = useState<{
		earliestDate: string;
		latestDate: string;
	}>();

	const {
		stockHistoricalDataInfo,
		stockHistoricalDataLoading,
		stockHistoricalDataError,
	} = useStockHistoricalData(ticker);

	const chartContainerRef = useRef<HTMLDivElement | null>(null);

	console.log(stockHistoricalDataError);

	useEffect(() => {
		if (stockHistoricalDataInfo) {
			const processedData = processHistoricalData(
				stockHistoricalDataInfo
			);
			setProcessedHistoricalData(processedData);
			const { earliestDate, latestDate } =
				getEarliestAndLatestDates(processedData);
			setDateRange({ earliestDate, latestDate });
		}
	}, [stockHistoricalDataInfo]);

	useEffect(() => {
		if (
			chartContainerRef.current &&
			processedHistoricalData &&
			!stockHistoricalDataLoading &&
			dateRange
		) {
			const chart = createChart(chartContainerRef.current, {
				width,
				height,
				layout: {
					background: { color: "transparent" },
					textColor: "#d1d4dc",
				},
				grid: {
					vertLines: { visible: false },
					horzLines: {
						color: "rgba(42, 46, 57, 0.5)",
					},
				},
				rightPriceScale: {
					borderVisible: true,
					visible: false,
				},
				timeScale: {
					barSpacing: 5,
					rightOffset: 5,
					borderVisible: false,
					visible: false,
				},
				crosshair: { horzLine: { visible: false } },
			});

			const lineSeries = chart.addLineSeries();

			lineSeries.setData(processedHistoricalData);

			chart.timeScale().setVisibleRange({
				from: dateRange.earliestDate,
				to: dateRange.latestDate,
			});

			return () => {
				chart.remove();
			};
		}
	}, [processedHistoricalData, stockHistoricalDataLoading, dateRange]);

	return (
		<Box
			h="100%"
			mt="2rem"
		>
			{stockHistoricalDataLoading ? (
				<Skeleton
					height={height}
					width={width}
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
