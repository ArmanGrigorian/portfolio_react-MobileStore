import "./SortPanel.scss";
import { useEffect, ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks.ts";
import { setParams, separateFetch, selectProducts } from "../../redux/slices/productsSlice.ts";

const SortPanel = () => {
	const { params, sortOptions } = useAppSelector(selectProducts);
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
			{sortOptions.map((option) => {
				return (
					<option key={option[0]} value={option[0]}>
						{option[1]}
					</option>
				);
			})}
		</select>
	);
};

export default SortPanel;
