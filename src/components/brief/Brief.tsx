import "./Brief.scss";

const Brief = ({ item }) => {
	return (
		<div className="Brief">
			<h4>{item.brand}</h4>
			<p>{item.model}</p>
			<div>
				<button>EDIT</button>
				<button>DELETE</button>
			</div>
		</div>
	);
};

export default Brief;
