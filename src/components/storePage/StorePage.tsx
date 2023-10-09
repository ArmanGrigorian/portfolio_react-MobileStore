import { Link } from "react-router-dom";
import "./StorePage.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storeItemsFetch } from "../../redux/slices/productsSlice.ts";
import StoreItem from "../storeItem/StoreItem.tsx";
import MyLoader from "../skeleton/ItemSkeleton.tsx";

const StorePage = () => {
	const { storeItems, isLoading } = useSelector((state) => state.products);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(storeItemsFetch());
	}, [dispatch]);

	return (
		<section className={"StorePage"}>
			<nav className={"auxNav"}>
				<ul>
					<li>
						<Link to={""}>All</Link>
					</li>
					<li>
						<Link to={""}>Apple</Link>
					</li>
					<li>
						<Link to={""}>Samsung</Link>
					</li>
				</ul>
			</nav>
			<h2>Store</h2>

			<div className={"storeItems"}>
				{!isLoading ? (
					storeItems.map((item) => <StoreItem key={item.id} item={item} />)
				) : (
					<MyLoader />
				)}
			</div>
		</section>
	);
};

export default StorePage;
