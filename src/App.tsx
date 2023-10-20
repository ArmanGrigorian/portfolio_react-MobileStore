import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import { PATH } from "./types/types.ts";
import { MainLayout, ErrorLayout } from "./components/layouts/index.ts";
import { StorePage, CartPage, AdminPage, SingleItem } from "./components/index.ts";

const App = () => {

	const router = createBrowserRouter(
		createRoutesFromElements(
			<>
				<Route path={PATH.HOME} element={<MainLayout />}>
					<Route
						index
						element={<StorePage />}
					/>
					<Route path={PATH.ADMIN} element={<AdminPage />} />
					<Route path={PATH.CART} element={<CartPage />} />
					<Route path={PATH.SINGLE_ITEM} element={<SingleItem />} />
				</Route>
				<Route path={PATH.ERROR} element={<ErrorLayout />} />
			</>,
		),
	);

	return (
		<>
			<RouterProvider router={router} />
		</>
	);
};

export default App;
