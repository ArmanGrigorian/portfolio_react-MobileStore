import "./Brief.scss";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteFetch, putFetch } from "../../redux/slices/adminSlice";
import EditItemForm from "../editItemForm/EditItemForm";

const Brief = ({ item }) => {

	const dispatch = useDispatch();
	const editDialogRef = useRef(null);

	return (
		<>
			<EditItemForm item={item} ref={editDialogRef} />
			<div className="Brief">
				<h4>{item.brand}</h4>
				<p>{item.model}</p>
				<div>
					<button onClick={() => editDialogRef.current.showModal()}>EDIT</button>
					<button onClick={() => dispatch(deleteFetch(item.id))}>DELETE</button>
				</div>
			</div>
		</>
	);
};

export default Brief;
