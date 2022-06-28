import { useRoutes } from "react-router-dom";
import { RouteWrapper } from "../components/ProtectedRoute/RouteWrapper";
import { Account } from "../pages/Account/Account";
import { DeactiveAccount } from "../pages/DeactiveAccount/DeactiveAccount";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";
import { MyProfile } from "../pages/MyProfile/MyProfile";
import { Privacy } from "../pages/Privacy/Privacy";
import { Register } from "../pages/Register/Register";

export const RouteComponent = () => {
  const element = useRoutes([
    {
      path: "/",
      element: (
        <RouteWrapper routeType="protected">
          <Home />
        </RouteWrapper>
      ),
    },
    {
      path: "/myProfile",
      element: (
        <RouteWrapper routeType="protected">
          <MyProfile />
        </RouteWrapper>
      ),
      children: [
        {
          path: "account",
          element: <Account />,
        },
        {
          path: "privacy",
          element: <Privacy />,
        },
        {
          path: "deactiveAccount",
          element: <DeactiveAccount />,
        },
      ],
    },
    {
      path: "/login",
      element: (
        <RouteWrapper routeType="guest">
          <Login />
        </RouteWrapper>
      ),
    },

    {
      path: "/register",
      element: (
        <RouteWrapper routeType="guest">
          <Register />
        </RouteWrapper>
      ),
    },
  ]);

  return element;
};
