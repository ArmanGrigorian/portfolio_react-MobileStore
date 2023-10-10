import "./CartPage.scss";
import { useSelector } from "react-redux";
import CartItem from "../cartItem/CartItem";

const CartPage = () => {
	const cartItems = useSelector((state) => state.products.cartItems);

	return (
		<section className={"CartPage"}>
			<h2>CartPage</h2>

			<div className={"cartItems"}>
				{cartItems.map((item) => {
					return <CartItem key={item.id} item={item} />;
				})}
			</div>

			<div className={"cartBottomDiv"}>
				<div>
					<p>total count:</p>
					<p>total price:</p>
				</div>

				<div>
					<button>BUY NOW</button>
				</div>
			</div>
		</section>
	);
};

export default CartPage;
