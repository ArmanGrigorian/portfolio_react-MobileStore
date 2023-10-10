import { useDispatch } from "react-redux";
import "./StoreItem.scss";
import { addToCart } from "../../redux/slices/productsSlice.ts";
import { DiscountIcon } from "../svgs/DiscountIcon.tsx";
import { discounter } from "../../utilities/discounter.tsx";

const StoreItem = ({ item }) => {
	const dispatch = useDispatch();

	return (
		<figure key={item.id} className={"StoreItem"}>
			{item.isDiscounted && <DiscountIcon size={66} />}
			<figcaption>{item.brand}</figcaption>
			<p>{item.model}</p>

			<img src={item.src} alt={item.alt} />

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
