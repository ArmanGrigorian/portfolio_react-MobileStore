import "./SingleItem.scss";
import { useDispatch, useSelector } from "react-redux";
import { dataRevealer } from "../../utilities/dateRevealer";
import { StarIcon } from "../svgs";
import { addToCart } from "../../redux/slices/productsSlice";
import Magnifier from "../imageMagnifier/Magnifier";

const SingleItem = () => {
	const currentItem = useSelector((state) => state.products.currentItem);
	const dispatch = useDispatch();

	return (
		<div className={"SingleItem"}>
			<table>
				<caption>Specifications</caption>
				<tbody>
					<tr>
						<td rowSpan={8} className="imgTd">
							<Magnifier src={currentItem.src} />
							{/* <img src={currentItem.src} alt={currentItem.alt} /> */}
						</td>
						<th>Brand</th>
						<td>{currentItem.brand}</td>
					</tr>
					<tr>
						<th>Model</th>
						<td>{currentItem.model}</td>
					</tr>

					<tr>
						<th>Release date</th>
						<td>{dataRevealer(currentItem.release)}</td>
					</tr>

					<tr>
						<th>OS</th>
						<td>{currentItem.brand} OS</td>
					</tr>

					<tr>
						<th>CPU</th>
						<td>{currentItem.brand} CPU</td>
					</tr>

					<tr>
						<th>GPU</th>
						<td>{currentItem.brand} GPU</td>
					</tr>

					<tr>
						<th>RAM</th>
						<td>{currentItem.brand} RAM</td>
					</tr>

					<tr>
						<th>Storage</th>
						<td>128GB / 256GB / 512GB / 1TB</td>
					</tr>

					<tr>
						<td>
							{[...new Array(currentItem.rating)].map(() => {
								return <StarIcon key={crypto.randomUUID()} size={10} />;
							})}
						</td>
						<th>Rating</th>
						<td>{currentItem.rating} / 10</td>
					</tr>

					<tr>
						<td>
							<button
								type="button"
								onClick={()=>dispatch(addToCart(currentItem))}
							>ADD TO CART</button>
						</td>
						<th>Price</th>
						<td>{currentItem.price}&#36;</td>
					</tr>
				</tbody>
			</table>	
		</div>
	);
};

export default SingleItem;
