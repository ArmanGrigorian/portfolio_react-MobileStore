import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useAppSelector } from "../../redux/hooks.ts";
import { selectProducts } from "../../redux/slices/productsSlice.ts";
import { T_SingleItem } from "../../types/types.ts";
import { AuxNav, ItemSkeleton, Pagination, StoreItem } from "../index.ts";
import "./StorePage.scss";

const StorePage = () => {
	const [parent] = useAutoAnimate();
	const { isPending, storeItems } = useAppSelector(selectProducts);

	return (
		<section className={"StorePage"}>
			<AuxNav />

			<h2>Store</h2>

			<div className={"StorePage__items"} ref={parent}>
				{!isPending
					? storeItems?.map((item: T_SingleItem) => <StoreItem key={item.id} item={item} />)
					: [...new Array(6)].map(() => <ItemSkeleton key={crypto.randomUUID()} />)}
			</div>

			<Pagination />
		</section>
	);
};

export default StorePage;
