import { RouterProvider, createBrowserRouter } from "react-router-dom"                                                              
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Style from "./pages/Style";
import Blank from "./pages/Blank";


const routes = createBrowserRouter([
    { path: "/", element: <About/> },
    { path: "/about", element: <About/> },
    { path: "/portfolio", element: <Portfolio/> },
    { path: "/contact", element: <Contact/> },
    { path: "/style", element: <Style/>},
    { path: "/blank", element: <Blank/>},
    { path: "/style", element: <Style/>}
])

function App() {
    return <RouterProvider router={routes} />;
}

export default App