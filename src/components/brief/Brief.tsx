import { useDispatch } from "react-redux";
import "./Brief.scss";
import { deleteFetch } from "../../redux/slices/adminSlice";

const Brief = ({ item }) => {

	const dispatch = useDispatch()

	return (
		<div className="Brief">
			<h4>{item.brand}</h4>
			<p>{item.model}</p>
			<div>
				<button>EDIT</button>
				<button onClick={()=>dispatch(deleteFetch(item.id))}>DELETE</button>
			</div>
		</div>
	);
};

export default Brief;
