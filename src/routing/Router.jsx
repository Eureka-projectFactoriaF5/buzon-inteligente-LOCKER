import { createBrowserRouter } from "react-router-dom";
//import { ExampleRoute } from "./routes/ExampleRoute";
import {PackageDashboardRoute} from "./routes/PackageDashboardRoute";
import { PackageDetailsRoute } from "./routes/PackageDetailsRoute";
import { HomeRoute } from "./routes/HomeRoute";

// TODO: Descomenta los campos y rellenalos con una ruta válida
export const router = createBrowserRouter(
    [
        {
            path: "/",
            children: [HomeRoute],
        },
        {
            path: "/packages",
            children: [PackageDashboardRoute, PackageDetailsRoute]
        },
    ],
    { basename: "/" }
)