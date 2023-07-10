import { createBrowserRouter, redirect } from "react-router-dom";
import App from "./App";
import MenuView from "./views/MenuView";
import CategoryView from "./views/CategoryView";
import LoginView from "./views/loginView";
import CategoryFormView from "./views/CategoryFormView";
import RegisterAdminView from "./views/RegisterAdminView";

const router = createBrowserRouter([
  {
    element: <App />,
    loader: () => {
      let token = localStorage.userId;
      if (!token) {
        return redirect("/login");
      }
      return null;
    },
    children: [
      {
        path: "/menu",
        element: <MenuView />,
      },
      {
        path: "/category",
        element: <CategoryView />,
      },
      {
        path: "/category/form",
        element: <CategoryFormView />,
      },
      {
        path: "/category/form/:id",
        element: <CategoryFormView />,
      },
      {
        path: "/register",
        element: <RegisterAdminView />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginView />,
    loader: () => {
      let token = localStorage.userId;
      if (token) {
        return redirect("/menu");
      }
      return null;
    },
  },
  {
    path: "/",
    loader: () => {
      let token = localStorage.userId;
      if (token) {
        return redirect("/home");
      } else {
        return redirect("/login");
      }
      return null;
    },
  },
]);

export default router;
