import "./Brief.scss";
import { useRef } from "react";
import { T_SingleItem } from "../../types/types.ts";
import EditItemForm from "../editItemForm/EditItemForm.tsx";
import { useDeleteProductMutation } from "../../redux/api/products.api.ts";

const Brief = ({ item }: { item: T_SingleItem }) => {
	const [deleteProduct] = useDeleteProductMutation();
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
					<button onClick={() => deleteProduct(item.id as string)}>DELETE</button>
				</div>
			</div>
		</>
	);
};

export default Brief;
