import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React, { Suspense, lazy } from "react";

// Importar o componente de loading
import Loading from "./pages/Loading";

// Carregar as páginas de forma assíncrona
const Home = lazy(() => import("./pages/Home"));
const Style = lazy(() => import("./pages/Style"));
const Blank = lazy(() => import("./pages/Blank"));

const routes = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/style", element: <Style /> },
  { path: "/blank", element: <Blank /> },
  { path: "/loading", element: <Loading /> },
]);

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={routes} />
    </Suspense>
  );
}

export default App;
