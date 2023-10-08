import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout.tsx";
import ErrorLayout from "./components/layouts/ErrorLayout.tsx";
import StorePage from "./components/pageStore/StorePage.tsx";
import CartPage from "./components/pageCart/CartPage.tsx";
import AdminPage from "./components/pageAdmin/AdminPage.tsx";

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route index element={<StorePage />} />
					<Route path="/admin" element={<AdminPage/>} />
					<Route path="/cart" element={<CartPage />} />
				</Route>
				<Route path="*" element={<ErrorLayout />} />
			</Routes>
		</>
	);
};

export default App;
