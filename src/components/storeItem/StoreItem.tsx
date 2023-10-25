import "./StoreItem.scss";
import { Link } from "react-router-dom";
import { discounter } from "../../utilities/index.ts";
import { useAppDispatch } from "../../redux/hooks.ts";
import { DiscountIcon } from "../svgs/DiscountIcon.tsx";
import { PATH, T_SingleItem } from "../../types/types.ts";
import { addToCart } from "../../redux/slices/productsSlice.ts";

const StoreItem = ({ item }: { item: T_SingleItem }) => {
	const dispatch = useAppDispatch();

	return (
		<figure className={"StoreItem"}>
			{item.isDiscounted && <DiscountIcon size={66} />}
			<figcaption>{item.brand}</figcaption>
			<p>{item.model}</p>

			<Link
				to={PATH.PRODUCTS + item.id}
				onClick={() => {
					localStorage.setItem("singleItem", JSON.stringify(item));
				}}>
				<img src={item.src} alt={item.alt} />
			</Link>

			<div>
				{item.isDiscounted ? (
					<div className="StoreItem__discountDiv">
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
