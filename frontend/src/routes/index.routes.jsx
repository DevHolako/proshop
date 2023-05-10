import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/home/home.page";
import Layout from "../pages/home/layout/layout.page";
import NotFound from "../pages/notFound/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
export default router;
