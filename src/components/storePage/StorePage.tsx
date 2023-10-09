import { Link } from "react-router-dom";
import "./StorePage.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setParams, separateFetch, storeItemsFetch } from "../../redux/slices/productsSlice.ts";
import StoreItem from "../storeItem/StoreItem.tsx";
import MyLoader from "../skeleton/ItemSkeleton.tsx";

const StorePage = () => {
	const { params, storeItems, isLoading } = useSelector((state) => state.products);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(storeItemsFetch());
	}, [dispatch]);

	useEffect(() => {
		dispatch(separateFetch(params));
	}, [dispatch, params]);


	function handleClick(e) {
		switch (e.target.dataset.name) {
			case "all":
				dispatch(storeItemsFetch());
				break;
			case "apple":
				console.log(e.target.dataset.name);
				dispatch(setParams({...params, param4: "filter", param5: e.target.dataset.name}));
				break;
			case "samsung":
				console.log(e.target.dataset.name);
				dispatch(setParams({...params, param4: "filter", param5: e.target.dataset.name}));
				break;
			default:
				break;
		}
	}

	return (
		<section className={"StorePage"}>
			<nav className={"auxNav"}>
				<ul onClick={handleClick}>
					<li data-name={"all"}>All</li>
					<li data-name={"apple"}>Apple</li>
					<li data-name={"samsung"}>Samsung</li>
				</ul>

				<select
					name="sort"
					defaultValue={"release desc"}
					onChange={(e) => {
						const oParams = e.target.value.split(" ");
						dispatch(
							setParams({
								...params,
								param1: "sortBy",
								param2: oParams[0],
								param3: oParams[1],
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
				{!isLoading ? (
					storeItems.map((item) => <StoreItem key={item.id} item={item} />)
				) : (
					<MyLoader />
				)}
			</div>
		</section>
	);
};

export default StorePage;
