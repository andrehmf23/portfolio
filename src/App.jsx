import { RouterProvider, createBrowserRouter } from "react-router-dom"                                                              

const routes = createBrowserRouter([
    { path: "/", element: <h1>Test</h1> }
])

function App() {
    return <RouterProvider router={routes} />;
}

export default App