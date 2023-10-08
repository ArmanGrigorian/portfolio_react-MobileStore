import "./Item.scss";

const Item = ({ item }) => {
	return (
		<figure key={item.id} className="Item">
			<figcaption>{item.brand}</figcaption>
			<p>{item.model}</p>

			<img src={item.imgSrc} alt={item.imgAlt} />

			<div>
				<p>{item.price} &#36; </p>
				<button type="button">ADD TO CART</button>
			</div>
		</figure>
	);
};

export default Item;
