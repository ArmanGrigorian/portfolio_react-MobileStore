import "./SearchBar.scss";
import { ChangeEvent } from "react";
import { SearchIcon } from "../svgs";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { certainItemFetch, setSearchValue } from "../../redux/slices/adminSlice";

const SearchBar = () => {
	const searchValue = useAppSelector((state) => state.admin.searchValue);
	const dispatch = useAppDispatch();

	return (
		<div className="SearchBar">
			<input
				type="search"
				value={searchValue}
				onChange={(e: ChangeEvent<HTMLInputElement>) => dispatch(setSearchValue(e.target.value))}
				placeholder="id or brand or model . . ."
			/>
			<button type="submit" onClick={() => dispatch(certainItemFetch(searchValue))}>
				<SearchIcon size={20} />
			</button>
		</div>
	);
};

export default SearchBar;
