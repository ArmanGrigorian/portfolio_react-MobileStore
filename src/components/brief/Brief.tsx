import "./Brief.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteFetch, putFetch } from "../../redux/slices/adminSlice";
import EditItemForm from "../editItemForm/EditItemForm";

const Brief = ({ item }) => {

	const [isEditable, setIsEditable] = useState();

	const dispatch = useDispatch();

	return (
		<>
			{isEditable && <EditItemForm item={item} setIsEditable={setIsEditable}/>}
			<div className="Brief">
				<h4>{item.brand}</h4>
				<p>{item.model}</p>
				<div>
					<button onClick={() => setIsEditable(true)}>EDIT</button>
					<button onClick={() => dispatch(deleteFetch(item.id))}>DELETE</button>
				</div>
			</div>
		</>
	);
};

export default Brief;
