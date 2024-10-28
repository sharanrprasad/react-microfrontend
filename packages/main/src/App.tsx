import React from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import PageLayout from "./containers/PageLayout.tsx";

const router = createBrowserRouter(
  [
    {
      id: "root",
      element: <PageLayout />,
      children: [
        // Dynamic import is supported by default with vite. Uses code splitting and reduces init bundle size. Not required here but just testing.
        {
          path: "/",
          lazy: () => {
            return import("./pages/Home.tsx");
          },
          id: "home",
        },
        {
          path: "/home",
          element: <Navigate to={"/"} />,
        },
      ],
    },
  ],
  {
    async patchRoutesOnNavigation({ path, patch }) {
      if (path.startsWith("/user")) {
        let children = await import("user/user.routes");
        console.log(children);
        patch("root", children.default.routes);
      }
    },
  },
);

const App: React.FC = () => {
  return (
    <div style={{ minHeight: "100%", padding: "35px" }}>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
