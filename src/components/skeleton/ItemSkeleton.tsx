import ContentLoader from "react-content-loader";


const ItemSkeleton = (props) => (
	<ContentLoader
		speed={2}
		width={248.39}
		height={335.39}
		viewBox="0 0 248.39 335.39"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
		{...props}>
		<rect x="80" y="21" rx="8" ry="8" width="85" height="16" />
		<rect x="69" y="50" rx="8" ry="8" width="107" height="19" />
		<rect x="40" y="88" rx="24" ry="24" width="172" height="194" />
		<rect x="136" y="301" rx="8" ry="8" width="91" height="24" />
		<rect x="25" y="303" rx="8" ry="8" width="71" height="17" />
	</ContentLoader>
);

export default ItemSkeleton;
