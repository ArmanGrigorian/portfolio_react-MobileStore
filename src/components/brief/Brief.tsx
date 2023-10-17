import "./Brief.scss";
import { useRef } from "react";
import { deleteFetch } from "../../redux/slices/adminSlice";
import EditItemForm from "../editItemForm/EditItemForm";
import { useAppDispatch } from "../../redux/hooks";
import { T_SingleItem } from "../../redux/slices/types";

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
