import "./CartPage.scss";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../cartItem/CartItem";
import { clearCart } from "../../redux/slices/productsSlice";

const CartPage = () => {
	const cartItems = useSelector((state) => state.products.cartItems);

	const dispatch = useDispatch();

	const totalPrice = cartItems.reduce((aggr, val) => {
		aggr += val.price * val.count;
		return aggr;
	}, 0);

	const totalCount = cartItems.reduce((aggr, val) => {
		aggr += val.count;
		return aggr;
	}, 0);

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
					<p>
						total count: <span>{totalCount}</span>{" "}
					</p>
					<p>
						total price: <span>{totalPrice}&#36;</span>
					</p>
				</div>

				<div>
					<button type="button" onClick={() => dispatch(clearCart())}>
						CLEAR CART
					</button>
					<button type="button">BUY NOW</button>
				</div>
			</div>
		</section>
	);
};

export default CartPage;
