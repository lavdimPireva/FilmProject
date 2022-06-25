import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { Outlet, useRoutes } from "react-router-dom";
import { MyProfile } from "./pages/MyProfile/MyProfile";
import { Register } from "./pages/Register/Register";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      ),
    },
    {
      path: "/my-profile",
      element: (
        <ProtectedRoute>
          <MyProfile />
        </ProtectedRoute>
      ),
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return routes;
}

export default App;
