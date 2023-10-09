import "./CartPage.scss";
import { useSelector } from "react-redux";
import CartItem from "../cartItem/CartItem";

const CartPage = () => {
	const items = useSelector((state) => state.cart.items);

	console.log(items);

	return (
		<section className="CartPage">
			<h2>CartPage</h2>

			<div className="cartItems">
				{items.map((item) => {
					return <CartItem key={item.id} item={item} />;
				})}
			</div>
		</section>
	);
};

export default CartPage;
