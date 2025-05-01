import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Favourites from "../Pages/Favourites/Favourites";
import About from "../Pages/About/About";
import PhoneDetails from "../Pages/PhoneDetails/PhoneDetails";
import ErrorPage from "../Pages/Error/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            index: true,
            Component: Home,
            hydrateFallbackElement:<div className="text-2xl font-bold text-center">Loading....</div>,
            loader: () => fetch('/phones.json')
        },
        {
            path: 'favourites',
            Component: Favourites
        },
        {
          path: 'about',
          Component: About
        },
        {
          path: 'phone-details/:id',
          loader: () => fetch('/phones.json'),
          Component: PhoneDetails
        }
    ]
  },
]);

export default router;
