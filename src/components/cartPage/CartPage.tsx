import "./CartPage.scss";
import CartItem from "../cartItem/CartItem";
import { clearCart } from "../../redux/slices/productsSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const CartPage = () => {
	const cartItems = useAppSelector((state) => state.products.cartItems);
	const dispatch = useAppDispatch();

	const totalPrice = cartItems?.reduce((acc, val) => {
		acc += val.price * val.count;
		return acc;
	}, 0);

	const totalCount = cartItems?.reduce((acc, val) => {
		acc += val.count;
		return acc;
	}, 0);

	return (
		<section className={"CartPage"}>
			<h2>CartPage</h2>

			<div className={"CartPage__items"}>
				{cartItems?.map((item) => {
					return <CartItem key={item.id} item={item} />;
				})}
			</div>

			<div className={"CartPage__bottomDiv"}>
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
