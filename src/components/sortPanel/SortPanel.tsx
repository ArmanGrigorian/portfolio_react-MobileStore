import "./SortPanel.scss";
import { useEffect, ChangeEvent } from "react";
import { setParams, separateFetch } from "../../redux/slices/productsSlice.ts";
import { useAppDispatch, useAppSelector } from "../../redux/hooks.ts";

const SortPanel = () => {
	const params = useAppSelector((state) => state.products.params);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(separateFetch(params));
	}, [dispatch, params]);

	return (
		<select
			name="sort"
			className={"SortPanel"}
			defaultValue={"release desc"}
			onChange={(e: ChangeEvent<HTMLSelectElement>) => {
				const oParams = e.target.value.split(" ");
				dispatch(
					setParams({
						...params,
						param2: "sortBy",
						param3: oParams[0],
						param4: oParams[1],
					}),
				);
			}}>
			<option value={"price asc"}>Price &#40; Low - High &#41;</option>
			<option value={"price desc"}>Price &#40; High - Low &#41;</option>
			<option value={"model desc"}>Name &#40; A - Z &#41;</option>
			<option value={"model asc"}>Name &#40; Z - A &#41;</option>
			<option value={"release asc"}>Release &#40; old first &#41;</option>
			<option value={"release desc"}>Release &#40; new first &#41;</option>
			<option value={"rating asc"}>Rating &#40; from lowest &#41;</option>
			<option value={"rating desc"}>Rating &#40; from highest &#41;</option>
		</select>
	);
};

export default SortPanel;
