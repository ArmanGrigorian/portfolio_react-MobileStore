import { useState, MouseEvent } from "react";

const Magnifier = ({ src }: { src: string }) => {
	const [[x, y], setXY] = useState([0, 0]);
	const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
	const [showMagnifier, setShowMagnifier] = useState(false);

	const width = "100%";
	const height = "100%";
	const magnifierWidth = 120;
	const magnifierHeight = 120;
	const zoomLevel = 1.2;

	return (
		<div
			style={{
				position: "relative",
				height: height,
				width: width,
			}}>
			<img
				src={src}
				style={{ height: height, width: width }}
				onMouseEnter={(e: MouseEvent<HTMLImageElement>) => {
					const elem = e.currentTarget;
					const { width, height } = elem.getBoundingClientRect();
					setSize([width, height]);
					setShowMagnifier(true);
				}}
				onMouseMove={(e: MouseEvent<HTMLImageElement>) => {
					const elem = e.currentTarget;
					const { top, left } = elem.getBoundingClientRect();

					const x = e.pageX - left - window.scrollX;
					const y = e.pageY - top - window.scrollY;
					setXY([x, y]);
				}}
				onMouseLeave={() => {
					setShowMagnifier(false);
				}}
				alt={"img"}
			/>

			<div
				className="glass"
				style={{
					display: showMagnifier ? "" : "none",
					position: "absolute",
					pointerEvents: "none",
					height: `${magnifierHeight}px`,
					width: `${magnifierWidth}px`,
					top: `${y - magnifierHeight / 2}px`,
					left: `${x - magnifierWidth / 2}px`,
					opacity: "1",
					border: "1px solid grey",
					borderRadius: "12px",
					backgroundColor: "white",
					backgroundImage: `url('${src}')`,
					backgroundRepeat: "no-repeat",
					backgroundSize: `${imgWidth * zoomLevel}px ${imgHeight * zoomLevel}px`,
					backgroundPositionX: `${-x * zoomLevel + magnifierWidth / 2}px`,
					backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`,
				}}></div>
		</div>
	);
};

export default Magnifier;
