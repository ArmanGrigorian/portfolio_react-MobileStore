import "./StorePage.scss";
import { useAppSelector } from "../../redux/hooks.ts";
import { selectProducts } from "../../redux/slices/productsSlice.ts";
import { StoreItem, ItemSkeleton, Pagination, AuxNav } from "../index.ts";

const StorePage = () => {
	const { isPending, storeItems } = useAppSelector(selectProducts);

	return (
		<section className={"StorePage"}>
			<AuxNav />

			<h2>Store</h2>

			<div className={"StorePage__items"}>
				{!isPending
					? storeItems?.map((item) => <StoreItem key={item.id} item={item} />)
					: [...new Array(6)].map(() => <ItemSkeleton key={crypto.randomUUID()} />)}
			</div>

			<Pagination />
		</section>
	);
};

export default StorePage;
