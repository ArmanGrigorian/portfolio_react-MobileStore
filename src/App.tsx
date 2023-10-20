import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout.tsx";
import ErrorLayout from "./components/layouts/errorLayout/ErrorLayout.tsx";
import StorePage from "./components/storePage/StorePage.tsx";
import CartPage from "./components/cartPage/CartPage.tsx";
import AdminPage from "./components/adminPage/AdminPage.tsx";
import SingleItem from "./components/singleItem/SingleItem.tsx";
import { PATH } from "./types/types.ts";

const App = () => {
	return (
		<>
			<Routes>
				<Route path={PATH.HOME} element={<MainLayout />}>
					<Route index element={<StorePage />} />
					<Route path={PATH.ADMIN} element={<AdminPage />} />
					<Route path={PATH.CART} element={<CartPage />} />
					<Route path={PATH.SINGLE_ITEM + ":id"} element={<SingleItem />} />
				</Route>
				<Route path="*" element={<ErrorLayout />} />
			</Routes>
		</>
	);
};

export default App;
