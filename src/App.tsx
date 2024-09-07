import { RouterProvider } from "react-router-dom";
import { routersFixed } from "./router";
import { useEffect, useState, Suspense } from "react";
import { generateRouters } from "./utils/http/generatesRouters";
import { createBrowserRouter } from "react-router-dom";
import { getMenu } from "./api/users";
import { useDispatch } from 'react-redux';
import { setMenu } from "./store/login/authSlice";
import { useSelector } from "react-redux";
import { Spin } from "antd"
function App() {
    const [routerTree, setRouterTree] = useState<any>(null)
    const dispatch = useDispatch()
    const { token } = useSelector((state: any) => state.authSlice)
    //setMenu is an async step, so, add a dependence, and ensure can we get the data of menu
    useEffect(() => {
        async function loadData() {
            const { data } = await getMenu()
            if (data.length) {
                dispatch(setMenu(data))
                const routersDynamic = generateRouters(data)//generate router tree dynamicly
                // the router tree is childre of "/"
                const myRouters = [...routersFixed]
                myRouters[0].children = routersDynamic
                // set a default
                myRouters[0].children[0].index = true
                const router = createBrowserRouter(myRouters)
                //send router object to state
                setRouterTree(router)
            } else {
                const router = createBrowserRouter(routersFixed)
                setRouterTree(router)
            }
        }
        loadData()
    }, [token])

    if (routerTree) {
        return (
            <div className="App">
                <Suspense fallback={<Spin></Spin>}>
                    <RouterProvider router={routerTree}></RouterProvider>
                </Suspense>

            </div>
        );
    } else {
        return <Spin></Spin>
    }

}

export default App;
