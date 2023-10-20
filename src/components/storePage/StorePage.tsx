import "./StorePage.scss";
import { useAppSelector } from "../../redux/hooks.ts";
import { StoreItem, ItemSkeleton, Pagination, AuxNav } from "../index.ts";

const StorePage = () => {
	const { isLoading, storeItems } = useAppSelector((state) => state.products);

	return (
		<section className={"StorePage"}>
			<AuxNav />

			<h2>Store</h2>

			<div className={"StorePage__items"}>
				{!isLoading
					? storeItems?.map((item) => <StoreItem key={item.id} item={item} />)
					: [...new Array(6)].map(() => <ItemSkeleton key={crypto.randomUUID()} />)}
			</div>

			<Pagination />
		</section>
	);
};

export default StorePage;
