import React from "react";
// ============= Pages ===============
import Home from "./Pages/Home";
import ShopGrid from "./Pages/ShopGrid";
// ===================================
import Root from "./CommonComponent/RootLayout/Root";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="/shopgrid" element={<ShopGrid />} />
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router}>
      <Home />
    </RouterProvider>
  );
}

export default App;
