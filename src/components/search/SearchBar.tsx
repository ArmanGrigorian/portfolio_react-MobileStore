import "./SearchBar.scss";
import { SearchIcon } from "../svgs";
import { useDispatch, useSelector } from "react-redux";
import { certainItemFetch, setSearchValue } from "../../redux/slices/adminSlice";

const SearchBar = () => {
	const searchValue = useSelector((state) => state.admin.searchValue);
	const dispatch = useDispatch();

	return (
		<div className="SearchBar">
			<input
				type="search"
				value={searchValue}
				onChange={(e) => dispatch(setSearchValue(e.target.value))}
				placeholder="id or brand or model . . ."
			/>
			<button
				type="submit"
				onClick={() => dispatch(certainItemFetch(searchValue))}
			>
				<SearchIcon size={20} />
			</button>
		</div>
	);
};

export default SearchBar;
