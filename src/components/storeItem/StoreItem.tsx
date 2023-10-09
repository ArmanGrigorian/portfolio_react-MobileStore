import { useDispatch } from "react-redux";
import "./StoreItem.scss";
import { addToCart } from "../../redux/slices/productsSlice.ts";

const StoreItem = ({ item }) => {

	const dispatch = useDispatch()

	return (
		<figure key={item.id} className={"StoreItem"}>
			<figcaption>{item.brand}</figcaption>
			<p>{item.model}</p>

			<img src={item.src} alt={item.alt} />

			<div>
				<p>{item.price} &#36; </p>
				<button type={"button"} onClick={() => {
					dispatch(addToCart(item));
				}}>
					ADD TO CART
				</button>
			</div>
		</figure>
	);
};

export default StoreItem;
