import { Link } from "react-router-dom";
import "./StorePage.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsFetch } from "../../redux/slices/productsSlice";
import Item from "../item/Item.tsx";

const StorePage = () => {
	const items = useSelector((state) => state.products.items);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(itemsFetch());
	}, [dispatch]);

	console.log(items);

	return (
		<section className="StorePage">
			<nav className="auxNav">
				<ul>
					<li>
						<Link to="">All</Link>
					</li>
					<li>
						<Link to="">Apple</Link>
					</li>
					<li>
						<Link to="">Samsung</Link>
					</li>
				</ul>
			</nav>
			<h2>Store</h2>

			<div className="items">
				{items.map((item) => (
					<Item key={item.id} item={item} />
				))}
			</div>
		</section>
	);
};

export default StorePage;
