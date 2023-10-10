import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout.tsx";
import ErrorLayout from "./components/layouts/ErrorLayout.tsx";
import StorePage from "./components/storePage/StorePage.tsx";
import CartPage from "./components/cartPage/CartPage.tsx";
import AdminPage from "./components/adminPage/AdminPage.tsx";
import SingleItem from "./components/singleItem/SingleItem.tsx";

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route index element={<StorePage />} />
					<Route path="/admin" element={<AdminPage />} />
					<Route path="/cart" element={<CartPage />} />
					<Route path="/:id" element={<SingleItem/>} />
				</Route>
				<Route path="*" element={<ErrorLayout />} />
			</Routes>
		</>
	);
};

export default App;
