import { RouteObject } from "react-router-dom";
import UserProfilePage from "./pages/UserProfilePage.tsx";

export const routes: RouteObject[] = [
  {
    id: "user-root",
    path: "/user",
    element: <UserProfilePage />,
  },
];
