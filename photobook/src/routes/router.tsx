import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Home/Home";
import AddFourcuts from "../pages/AddFourcuts";
import SummaryPhoto from "../pages/SummaryPhoto";
import AddPhoto from "../pages/AddPhoto";
import PhotoUploadPage from "../pages/PhotoUploadPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/addFourcuts",
        element: <AddFourcuts />,
      },
      { path: "/summaryphoto", element: <SummaryPhoto /> },

      { path: "/addphoto", element: <AddPhoto /> },
      { path: "/uploadphoto", element: <PhotoUploadPage /> },
    ],
  },
]);
