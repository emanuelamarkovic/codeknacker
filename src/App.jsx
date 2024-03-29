import "./App.css";
import { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Routes,
  Route,
} from "react-router-dom";
import Game from "./components/Game/Game";
import { Layout } from "./components/Layout/Layout.jsx";
import { Leaderboard } from "./components/Leaderboard/Leaderboard.jsx";
import Login from "./components/authentication/Login";
import { Profile } from "./components/Profile/Profile.jsx";
import { useUserContext } from "./contexts/UserContext.jsx";
import Start from "./components/Start/Start";

function App() {
  const { userState } = useUserContext();
  const { isLoggedIn } = userState;

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Start />,
        },
        {
          path: "game",
          element: isLoggedIn ? <Game /> : <Login />,
        },
        {
          path: "leaderboard",
          element: <Leaderboard />,
        },
        {
          path: `profile`,
          element: isLoggedIn ? <Profile /> : <Login />,
        },
        {
          path: "*",
          element: (
            <div style={{ textAlign: "center", fontSize: "2em" }}>404</div>
          ),
        },
      ],
    },
  ], {basename: import.meta.env.DEV ? "/" : '/codeknacker/'});

  return <RouterProvider router={router} fallbackElement={<p>loading..</p>} />;
}

export default App;
