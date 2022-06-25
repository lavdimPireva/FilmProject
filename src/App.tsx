import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { useRoutes } from "react-router-dom";
import { MyProfile } from "./pages/MyProfile/MyProfile";
import { Register } from "./pages/Register/Register";

function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },

    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/my-profile",
      element: <MyProfile />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return routes;
}

export default App;
