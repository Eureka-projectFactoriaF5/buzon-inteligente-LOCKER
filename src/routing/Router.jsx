import { createBrowserRouter } from "react-router-dom";
import { ViewPackageSize } from "../pages/ViewPackageSize";


export const router = createBrowserRouter(
    [
        {
            path: "/",
            children: [],
        },
        {
            path: "/view-package-size",
            element: <ViewPackageSize />,
        },
    ],
    { basename: "/" }
)

