import React from "react";
import RequireAuth from "../utils/requireAuth";
import { RouteObject } from "react-router-dom";

const Home = React.lazy(() => import("../page/home"))
const Login = React.lazy(() => import("../page/login"))
const NotFound = React.lazy(() => import("../page/404"))

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <RequireAuth allowed={true} redirectTo="/login"><Home /></RequireAuth>
//     },
//     {
//         path: "/login",
//         element: <RequireAuth allowed={false} redirectTo="/"><Login /></RequireAuth>
//     },
//     {
//         path: "*",
//         element: <NotFound />
//     }
// ])

// export default router

export const routersFixed: RouteObject[] = [
    {
        path: "/",
        element: <RequireAuth allowed={true} redirectTo="/login"><Home /></RequireAuth>
    },
    {
        path: "/login",
        element: <RequireAuth allowed={false} redirectTo="/dashboard"><Login /></RequireAuth>
    },
    {
        path: "*",
        element: <NotFound />
    }
]