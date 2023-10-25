import "./CartItem.scss";
import { T_SingleItem } from "../../types/types";
import { useAppDispatch } from "../../redux/hooks";
import { addToCart, deleteFromCart, removeFromCart } from "../../redux/slices/productsSlice";

const CartItem = ({ item }: { item: T_SingleItem }) => {
	const dispatch = useAppDispatch();

	return (
		<figure className={"CartItem"}>
			<div className={"CartItem__left"}>
				<img src={item.src} alt={item.alt} />
				<figcaption>{item.model}</figcaption>
			</div>

			<div className={"CartItem__mid"}>
				<p>{item.price * item.count} &#36;</p>
				<div>
					<button type={"button"} onClick={() => dispatch(removeFromCart(item))}>
						&#45;
					</button>
					<p>{item.count}</p>
					<button type={"button"} onClick={() => dispatch(addToCart(item))}>
						&#43;
					</button>
				</div>
			</div>

			<div className={"CartItem__right"}>
				<button type={"button"} onClick={() => dispatch(deleteFromCart(item))}>
					&#88;
				</button>
			</div>
		</figure>
	);
};

export default CartItem;
