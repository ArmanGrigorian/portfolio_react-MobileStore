import { Link } from "react-router-dom";
import "./StorePage.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSortParams, sortFetch, storeItemsFetch } from "../../redux/slices/productsSlice.ts";
import StoreItem from "../storeItem/StoreItem.tsx";
import MyLoader from "../skeleton/ItemSkeleton.tsx";

const StorePage = () => {
	const { sortParams, storeItems, isLoading } = useSelector((state) => state.products);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(storeItemsFetch());
	}, [dispatch]);

	useEffect(() => {
		dispatch(sortFetch(sortParams));
	}, [dispatch, sortParams]);

	return (
		<section className={"StorePage"}>
			<nav className={"auxNav"}>
				<ul>
					<li>
						<Link to={""}>All</Link>
					</li>
					<li>
						<Link to={""}>Apple</Link>
					</li>
					<li>
						<Link to={""}>Samsung</Link>
					</li>
				</ul>

				<select
					name="sort"
					defaultValue={"release desc"}
					onChange={(e) => {
						const params = e.target.value.split(" ");
						dispatch(setSortParams({ param1: params[0], param2: params[1] }));
					}}>
					<option value={"price asc"}>Price &#40; Low - High &#41;</option>
					<option value={"price desc"}>Price &#40; High - Low &#41;</option>
					<option value={"model asc"}>Name &#40; A - Z &#41;</option>
					<option value={"model desc"}>Name &#40; A - A &#41;</option>
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
