import { createBrowserRouter } from "react-router-dom";
import HomeView from "./views/HomeView";
import App from "./App";
import ProductView from "./views/ProductView";
import DetailView from "./views/DetailView";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomeView />,
      },
      {
        path: "/menu",
        element: <ProductView/>,
      },
      {
        path: "/menu/detail/:id",
        element: <DetailView/>,
      },
    ],
  },
]);

export default router;
