import "./Pagination.scss";
import ReactPaginate from "react-paginate";
import { setParams } from "../../redux/slices/productsSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const Pagination = () => {
	const params = useAppSelector((state) => state.products.params);
	const dispatch = useAppDispatch();

	let pagPageCount = null;
	if (localStorage.getItem("length")) {
		pagPageCount = Math.ceil(JSON.parse(localStorage.getItem("length")!) / 8);
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
