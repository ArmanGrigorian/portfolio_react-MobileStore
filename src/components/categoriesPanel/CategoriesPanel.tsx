import "./CategoriesPanel.scss";
import { useEffect, MouseEvent } from "react";
import {
	setParams,
	separateFetch,
	pageItemsFetch,
	setActiveCategory,
} from "../../redux/slices/productsSlice.ts";
import { useAppDispatch, useAppSelector } from "../../redux/hooks.ts";
import { MenuIcon } from "../svgs/MenuIcon.tsx";

const CategoriesPanel = () => {
	const { categories, activeCategory, params } = useAppSelector((state) => state.products);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(separateFetch(params));
	}, [dispatch, params]);

	function handleClick(e: MouseEvent<HTMLLIElement>) {
		const li = e.target as HTMLLIElement;

		li.dataset.name === "all"
			? dispatch(pageItemsFetch())
			: dispatch(setParams({ ...params, param5: "filter", param6: li.dataset.name }));
		li.dataset.name && dispatch(setActiveCategory(li.dataset.name));
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
					<MenuIcon size={24}/>
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
