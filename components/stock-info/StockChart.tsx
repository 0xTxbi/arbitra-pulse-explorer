import React, { useEffect, useRef, useState } from "react";
import { createChart } from "lightweight-charts";
import useStockHistoricalData from "@/hooks/useStockHistoricalData";
import { Box, Button, Skeleton } from "@mantine/core";
import {
	getEarliestAndLatestDates,
	processHistoricalData,
} from "@/utils/processHistoricalData";

interface StockChartProps {
	width?: number;
	height?: number;
	ticker: string;
}

const StockChart: React.FC<StockChartProps> = ({ ticker }) => {
	// chart dimensions
	const [chartWidth, setChartWidth] = useState<number>(0);
	const [chartHeight, setChartHeight] = useState<number>(0);

	const [processedHistoricalData, setProcessedHistoricalData] =
		useState<any>();
	const [dateRange, setDateRange] = useState<{
		earliestDate: string;
		latestDate: string;
	}>();

	const {
		fetchStockHistoricalData,
		stockHistoricalDataInfo,
		stockHistoricalDataLoading,
		stockHistoricalDataError,
	} = useStockHistoricalData(ticker);

	const chartContainerRef = useRef<HTMLDivElement | null>(null);
	const boxRef = useRef<HTMLDivElement | null>(null);

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

		if (stockHistoricalDataError) {
			<Button
				onClick={() => fetchStockHistoricalData(ticker)}
				loading={stockHistoricalDataLoading}
			>
				Retry
			</Button>;
		}
	}, [stockHistoricalDataInfo, stockHistoricalDataError]);

	useEffect(() => {
		if (
			chartContainerRef.current &&
			processedHistoricalData &&
			!stockHistoricalDataLoading &&
			dateRange
		) {
			const chart = createChart(chartContainerRef.current, {
				width: chartWidth,
				height: chartHeight,
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

			const lineSeries = chart.addAreaSeries({
				topColor: "#1971c2",
				lineColor: "#1971c2",
			});

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

	useEffect(() => {
		console.log(boxRef);
		if (boxRef.current) {
			setChartHeight(boxRef.current.offsetHeight);
			setChartWidth(boxRef.current.offsetWidth);
			console.log("Width: ", boxRef.current.offsetWidth);
			console.log("Height: ", boxRef.current.offsetHeight);
		}
	}, []);

	return (
		<Box
			ref={boxRef}
			h="100%"
			mt="2rem"
		>
			{stockHistoricalDataLoading ? (
				<Skeleton
					height={chartHeight}
					width={chartWidth}
				/>
			) : (
				<div ref={chartContainerRef} />
			)}
		</Box>
	);
};

export default StockChart;
