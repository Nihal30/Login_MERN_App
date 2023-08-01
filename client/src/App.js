import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Username from "../src/components/Username";
import Password from "./components/Password";
import Profile from "./components/Profile";
import Register from "./components/Register";
import Reset from "./components/Reset";
import UserNotFound from "./components/UserNotFound";
import Recovery from "./components/Recovery";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Username />,
  },
  {
    path: "/profile",
    element: <Profile/>,
  },
  {
    path: "/password",
    element: <Password />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/reset",
    element: <Reset />,
  },
  {
    path: "/recovery",
    element: <Recovery/>,
  },
  {
    path: "/usernotfound",
    element: <UserNotFound/>,
  },
]);

const App = () => {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
};

export default App;
