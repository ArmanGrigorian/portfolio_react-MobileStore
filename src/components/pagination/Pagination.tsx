import "./Pagination.scss";
import { LS } from "../../types/types";
import ReactPaginate from "react-paginate";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectParams, setParams } from "../../redux/slices/productsSlice";

const Pagination = () => {
	const params = useAppSelector(selectParams);
	const dispatch = useAppDispatch();

	let pagPageCount: number = 40;

	if (localStorage.getItem(LS.LENGTH)) {
		pagPageCount = Math.ceil(JSON.parse(localStorage.getItem(LS.LENGTH)!) / 8);
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
