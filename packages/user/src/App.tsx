import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./user.routes.tsx";

const router = createBrowserRouter(routes);

const App: React.FC = () => (
  <div>
    <h1>Remote Customers Module</h1>
    <RouterProvider router={router} />
  </div>
);
export default App;
