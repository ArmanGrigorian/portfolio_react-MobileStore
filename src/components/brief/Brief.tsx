import "./Brief.scss";
import { useRef } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { T_SingleItem } from "../../types/types.ts";
import { deleteFetch } from "../../redux/slices/adminSlice";
import EditItemForm from "../editItemForm/EditItemForm.tsx";

const Brief = ({ item }: { item: T_SingleItem }) => {
	const dispatch = useAppDispatch();
	const editDialogRef = useRef<HTMLDialogElement | null>(null);

	return (
		<>
			<EditItemForm item={item} ref={editDialogRef} />
			<div className={"Brief"}>
				<h4>{item.brand}</h4>
				<p>{item.model}</p>
				<div>
					<button onClick={() => editDialogRef.current && editDialogRef.current.showModal()}>
						EDIT
					</button>
					<button onClick={() => dispatch(deleteFetch(item.id))}>DELETE</button>
				</div>
			</div>
		</>
	);
};

export default Brief;
