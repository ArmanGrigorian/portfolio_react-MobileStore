import "./StorePage.scss";
import { useEffect, MouseEvent, ChangeEvent } from "react";
import {
	setParams,
	separateFetch,
	pageItemsFetch,
	setActiveCategory,
} from "../../redux/slices/productsSlice.ts";
import StoreItem from "../storeItem/StoreItem.tsx";
import ItemSkeleton from "../skeleton/ItemSkeleton.tsx";
import Pagination from "../pagination/Pagination.tsx";
import { useAppDispatch, useAppSelector } from "../../redux/hooks.ts";

const StorePage = () => {
	const { categories, activeCategory, params, storeItems, isLoading } = useAppSelector(
		(state) => state.products,
	);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(pageItemsFetch());
	}, [dispatch]);

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
		<section className={"StorePage"}>
			<nav className={"auxNav"}>
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

				<select
					name="sort"
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
					<option value={"model asc"}>Name &#40; A - Z &#41;</option>
					<option value={"model desc"}>Name &#40; Z - A &#41;</option>
					<option value={"release asc"}>Release &#40; old first &#41;</option>
					<option value={"release desc"}>Release &#40; new first &#41;</option>
					<option value={"rating asc"}>Rating &#40; from highest &#41;</option>
					<option value={"rating desc"}>Rating &#40; from lowest &#41;</option>
				</select>
			</nav>

			<h2>Store</h2>

			<div className={"storeItems"}>
				{!isLoading
					? storeItems?.map((item) => <StoreItem key={item.id} item={item} />)
					: [...new Array(6)].map(() => <ItemSkeleton key={crypto.randomUUID()} />)}
			</div>

			<Pagination />
		</section>
	);
};

export default StorePage;
