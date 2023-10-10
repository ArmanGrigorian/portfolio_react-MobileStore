import { useParams } from "react-router-dom";
import "./SingleItem.scss";
import { useSelector } from "react-redux";
import { dataRevealer } from "../../utilities/dateRevealer";
import { StarIcon } from "../svgs";

const SingleItem = () => {
	const { id } = useParams();
	const storeItems = useSelector((state) => state.products.storeItems);
	const currentItem = storeItems.filter((item) => {
		return item.id === id;
	})[0];

	return (
		<div className={"SingleItem"}>
			<div className="left">
				<div>
					{[...new Array(currentItem.rating)].map((point) => {
						return <StarIcon size={40} />;
					})}
				</div>
				<img src={currentItem.src} alt={currentItem.alt} />
			</div>

			<div className="right">
				<table>
					<caption>Specifications</caption>
					<tbody>
						<tr>
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
							<th>Rating</th>
							<td>{currentItem.rating} / 10</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default SingleItem;
