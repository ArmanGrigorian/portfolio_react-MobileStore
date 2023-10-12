import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./StoreItem.scss";
import { addToCart, setCurrentItem} from "../../redux/slices/productsSlice.ts";
import { DiscountIcon } from "../svgs/DiscountIcon.tsx";
import { discounter } from "../../utilities/discounter.ts";
import { Link } from "react-router-dom";


const StoreItem = ({ item }) => {
	const dispatch = useDispatch();

	return (
		<figure className={"StoreItem"}>
			{item.isDiscounted && <DiscountIcon size={66} />}
			<figcaption>{item.brand}</figcaption>
			<p>{item.model}</p>

			<Link to={"/" + item.id} onClick={() => dispatch(setCurrentItem(item))}>
				<img src={item.src} alt={item.alt} />
			</Link>

			<div>
				{item.isDiscounted ? (
					<div className="discountDiv">
						<p>SAVE {item.discountPercent}&#37;</p>
						<div>
							<p>{item.price}&#36;</p>
							<p>{discounter(item.price, item.discountPercent)}&#36;</p>
						</div>
					</div>
				) : (
					<p>{item.price}&#36;</p>
				)}
				<button
					type={"button"}
					onClick={() => {
						dispatch(addToCart(item));
					}}>
					ADD TO CART
				</button>
			</div>
		</figure>
	);
};

export default StoreItem;
