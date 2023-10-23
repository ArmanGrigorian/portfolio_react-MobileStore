import "./Pagination.scss";
import ReactPaginate from "react-paginate";
import { setParams } from "../../redux/slices/productsSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const Pagination = () => {
	const params = useAppSelector((state) => state.products.params);
	const dispatch = useAppDispatch();

	let pagPageCount = null;
	if (localStorage.getItem("pagLength")) {
		pagPageCount = Math.ceil(JSON.parse(localStorage.getItem("pagLength")!) / 8);
	} else if (localStorage.getItem("allItems")) {
		pagPageCount = Math.ceil(JSON.parse(localStorage.getItem("allItems")!).length / 8);
	} else {
		pagPageCount = 40;
	}

	return (
		<ReactPaginate
			className={"Pagination"}
			breakLabel={"..."}
			nextLabel={"next page>"}
			onPageChange={(e) =>
				dispatch(
					setParams({
						...params,
						param1: String(e.selected + 1),
					}),
				)
			}
			pageRangeDisplayed={2}
			pageCount={pagPageCount}
			previousLabel={"< prev page"}
			renderOnZeroPageCount={null}
		/>
	);
};

export default Pagination;
