import "./CartItem.scss";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/slices/cartSlice";

const CartItem = ({ item }) => {
	const dispatch = useDispatch();

	return (
		<figure className="CartItem">
			<figcaption>{item.model}</figcaption>
			<img src={item.src} alt={item.alt} />

			<div>
				<button>&#45;</button>
				<p>{item.count}</p>
				<button>&#43;</button>
			</div>

			<p>{item.price} &#36;</p>
			<button type="button" onClick={() => dispatch(removeFromCart(item))}>
				&#88;
			</button>
		</figure>
	);
};

export default CartItem;
