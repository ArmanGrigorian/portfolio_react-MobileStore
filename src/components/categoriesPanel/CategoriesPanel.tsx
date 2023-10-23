import "./CategoriesPanel.scss";
import {
	setParams,
	separateFetch,
	setActiveCategory,
	selectProducts,
} from "../../redux/slices/productsSlice.ts";
import { useEffect, MouseEvent } from "react";
import { MenuIcon } from "../svgs/MenuIcon.tsx";
import { useAppDispatch, useAppSelector } from "../../redux/hooks.ts";

const CategoriesPanel = () => {
	const { categories, activeCategory, params } = useAppSelector(selectProducts);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(separateFetch(params));
	}, [dispatch, params]);

	function handleClick(e: MouseEvent<HTMLLIElement>) {
		const li = e.target as HTMLLIElement;
		li.dataset.name && dispatch(setActiveCategory(li.dataset.name));

		if (li.dataset.name === "all") {
			dispatch(
				setParams({
					param1: "1",
					param2: "sortBy",
					param3: "release",
					param4: "desc",
					param5: "",
					param6: "",
				}),
			);
		} else {
			dispatch(setParams({ ...params, param5: "filter", param6: li.dataset.name }));
		}
	}

	return (
		<>
			<ul className="Categories__ul">
				{categories.map((category) => (
					<li
						key={crypto.randomUUID()}
						className={activeCategory === category.toLocaleLowerCase() ? "active" : ""}
						data-name={category.toLocaleLowerCase()}
						onClick={handleClick}>
						{category}
					</li>
				))}
			</ul>

			<details className="Categories__details">
				<summary>
					<MenuIcon size={24} />
				</summary>
				<ul>
					{categories.map((category) => (
						<li
							key={crypto.randomUUID()}
							className={activeCategory === category.toLocaleLowerCase() ? "active" : ""}
							data-name={category.toLocaleLowerCase()}
							onClick={handleClick}>
							{category}
						</li>
					))}
				</ul>
			</details>
		</>
	);
};

export default CategoriesPanel;
