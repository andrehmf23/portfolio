import { RouterProvider, createBrowserRouter } from "react-router-dom"                                                              
import Style from "./pages/Style";
import Home from "./pages/Home";
import Parallax from "./pages/Parallax";
import Blank from "./pages/Blank";


const routes = createBrowserRouter([
    { path: "/", element: <Home/> },
    { path: "/style", element: <Style/>},
    { path: "/parallax", element: <Parallax/>},
    { path: "/blank", element: <Blank/>},
    { path: "/style", element: <Style/>}
])

function App() {
    return <RouterProvider router={routes} />;
}

export default App