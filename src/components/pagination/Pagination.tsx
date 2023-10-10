import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import "./Pagination.scss";
import { setParams } from "../../redux/slices/productsSlice";

const Pagination = () => {
	const params = useSelector((state) => state.products.params);
	const dispatch = useDispatch();

	return (
		<ReactPaginate
			className={"Pagination"}
			breakLabel={"..."}
			nextLabel={"next page>"}
			onPageChange={(e) =>
				dispatch(
					setParams({
						...params,
						param1: e.selected + 1,
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
