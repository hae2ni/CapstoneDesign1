import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Home/Home";
import Album from "../pages/Album";
import AddPhoto from "../pages/AddPhoto";
import SummaryPhoto from "../pages/SummaryPhoto";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/album",
        element: <Album />,
      },
      { path: "/addphoto", element: <AddPhoto /> },
      { path: "/summaryphoto", element: <SummaryPhoto /> },
    ],
  },
]);
