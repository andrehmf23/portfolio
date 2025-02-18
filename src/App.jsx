import { RouterProvider, createBrowserRouter } from "react-router-dom"                                                              
import Home from "./pages/Home";
import Style from "./pages/Style";
import Blank from "./pages/Blank";


const routes = createBrowserRouter([
    { path: "/", element: <Home/> },
    { path: "/style", element: <Style/>},
    { path: "/blank", element: <Blank/>},
    { path: "/style", element: <Style/>}
])

function App() {
    return <RouterProvider router={routes} />;
}

export default App