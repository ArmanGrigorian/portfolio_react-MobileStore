import "./Brief.scss";
import { useRef } from "react";
import { T_SingleItem } from "../../types/types";
import { useAppDispatch } from "../../redux/hooks";
import { deleteFetch } from "../../redux/slices/adminSlice";
import EditItemForm from "../editItemForm/EditItemForm.tsx";

type T_BriefProps = {
	item: T_SingleItem;
};

const Brief = ({ item }: T_BriefProps) => {
	const dispatch = useAppDispatch();
	const editDialogRef = useRef(null);

	return (
		<>
			<EditItemForm item={item} ref={editDialogRef} />
			<div className={"Brief"}>
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
