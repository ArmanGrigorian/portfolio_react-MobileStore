import "./CartPage.scss";
import { useSelector } from "react-redux";
import CartItem from "../cartItem/CartItem";

const CartPage = () => {
	const cartItems = useSelector((state) => state.products.cartItems);

	const totalPrice = cartItems.reduce((aggr, val) => {
		aggr += val.price * val.count;
		return aggr;
	}, 0)

	const totalCount = cartItems.reduce((aggr, val) => {
		aggr += val.count;
		return aggr;
	}, 0)

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
					<p>total count: {totalCount}</p>
					<p>total price: {totalPrice}</p>
				</div>

				<div>
					<button>BUY NOW</button>
				</div>
			</div>
		</section>
	);
};

export default CartPage;
