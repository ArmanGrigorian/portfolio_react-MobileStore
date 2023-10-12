import "./Pagination.scss";
import ReactPaginate from "react-paginate";
import { setParams } from "../../redux/slices/productsSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const Pagination = () => {
	const params = useAppSelector((state) => state.products.params);
	const dispatch = useAppDispatch();

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
			pageRangeDisplayed={8}
			pageCount={5}
			previousLabel={"< previous page"}
			renderOnZeroPageCount={null}
		/>
	);
};

export default Pagination;
