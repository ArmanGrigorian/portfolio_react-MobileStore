import { ForwardedRef } from "react";
import { T_SingleItem } from "../../types/types";

export type EditItemFormTypes = {
	item: T_SingleItem;
	ref: ForwardedRef<HTMLDialogElement>;
};
