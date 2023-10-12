import "./CartItem.scss";
import { useDispatch } from "react-redux";
import { addToCart, deleteFromCart, removeFromCart } from "../../redux/slices/productsSlice";

const CartItem = ({ item }) => {
	const dispatch = useDispatch();

	return (
		<figure className={"CartItem"}>
			<div className="left">
				<figcaption>{item.model}</figcaption>
				<img src={item.src} alt={item.alt} />
			</div>

			<div className="mid">
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

			<div className="right">
				<button type={"button"} onClick={() => dispatch(deleteFromCart(item))}>
					&#88;
				</button>
			</div>
		</figure>
	);
};

export default CartItem;
