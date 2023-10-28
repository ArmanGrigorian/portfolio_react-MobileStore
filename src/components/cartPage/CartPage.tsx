import "./CartPage.scss";
import CartItem from "../cartItem/CartItem";
import { getTotalOf } from "../../utilities/index.ts";
import { ACTION, T_SingleItem } from "../../types/types";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { clearCart, selectCartItems } from "../../redux/slices/productsSlice";

const CartPage = () => {
	const cartItems = useAppSelector(selectCartItems);
	const dispatch = useAppDispatch();

	const totalPrice: number = getTotalOf(ACTION.PRICE, cartItems);
	const totalCount: number = getTotalOf(ACTION.COUNT, cartItems);

	return (
		<section className={"CartPage"}>
			<h2>CartPage</h2>

			<div className={"CartPage__items"}>
				{cartItems?.map((item: T_SingleItem) => {
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
