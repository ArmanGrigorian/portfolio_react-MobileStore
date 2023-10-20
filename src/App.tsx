import { Routes, Route } from "react-router-dom";
import { MainLayout, ErrorLayout } from "./components/layouts/index.ts";
import { StorePage, CartPage, AdminPage, SingleItem } from "./components/index.ts";
import { PATH } from "./types/types.ts";

const App = () => {
	return (
		<>
			<Routes>
				<Route path={PATH.HOME} element={<MainLayout />}>
					<Route index element={<StorePage />} />
					<Route path={PATH.ADMIN} element={<AdminPage />} />
					<Route path={PATH.CART} element={<CartPage />} />
					<Route path={PATH.SINGLE_ITEM} element={<SingleItem />} />
				</Route>
				<Route path={PATH.ERROR} element={<ErrorLayout />} />
			</Routes>
		</>
	);
};

export default App;
