import ContentLoader from "react-content-loader";

const ItemSkeleton = () => (
	<ContentLoader
		speed={2}
		width={248.39}
		height={360}
		viewBox={"0 0 248.39 360"}
		backgroundColor={"#f3f3f3"}
		foregroundColor={"#ecebeb"}>
		<rect x={"98"} y={"12"} rx={"8"} ry={"8"} width={"50"} height={"16"} />
		<rect x={"81"} y={"36"} rx={"8"} ry={"8"} width={"87"} height={"19"} />
		<rect x={"52"} y={"66"} rx="24" ry="24" width={"149"} height={"178"} />
		<rect x={"168"} y={"256"} rx={"8"} ry={"8"} width={"56"} height={"48"} />
		<rect x={"26"} y={"258"} rx={"8"} ry={"8"} width={"71"} height={"24"} />
	</ContentLoader>
);

export default ItemSkeleton;
