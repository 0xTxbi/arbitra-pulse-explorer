import React, { useEffect, useRef, useState } from "react";

const ResponsiveComponent: React.FC = () => {
	const componentRef = useRef<HTMLDivElement>(null);
	const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

	useEffect(() => {
		const updateDimensions = () => {
			if (componentRef.current) {
				const { offsetWidth, offsetHeight } =
					componentRef.current;
				setDimensions({
					width: offsetWidth,
					height: offsetHeight,
				});
			}
		};

		// Update dimensions on initial render
		updateDimensions();

		// Update dimensions on window resize
		window.addEventListener("resize", updateDimensions);

		// Cleanup event listener on unmount
		return () => {
			window.removeEventListener("resize", updateDimensions);
		};
	}, []);

	return (
		<div ref={componentRef}>
			{/* Your component */}
			<p>Width: {dimensions.width}</p>
			<p>Height: {dimensions.height}</p>
		</div>
	);
};

export default ResponsiveComponent;
