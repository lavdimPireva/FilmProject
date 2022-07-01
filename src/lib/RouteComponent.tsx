import { useRoutes } from "react-router-dom";
import { RouteWrapper } from "../components/ProtectedRoute/RouteWrapper";
import { HomeLayout } from "../layout/HomeLayout/HomeLayout";
import { ProfileLayout } from "../layout/ProfileLayout/ProfileLayout";
import { Account } from "../pages/Account/Account";
import { Comment } from "../pages/Comment/Comment";
import { DeactiveAccount } from "../pages/DeactiveAccount/DeactiveAccount";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";
import { MyProfile } from "../pages/MyProfile/MyProfile";
import { Photos } from "../pages/Photos/Photos";
import Posts from "../pages/Posts/Posts";
import { Privacy } from "../pages/Privacy/Privacy";
import { Register } from "../pages/Register/Register";

export const RouteComponent = () => {
  const element = useRoutes([
    {
      path: "/",
      element: (
        <HomeLayout>
          <RouteWrapper routeType="protected">
            <Home />
          </RouteWrapper>
        </HomeLayout>
      ),
    },
    {
      path: "/posts",
      element: (
        <HomeLayout>
          <RouteWrapper routeType="protected">
            <Posts />
          </RouteWrapper>
        </HomeLayout>
      ),
    },
    {
      path: "/comments",
      element: (
        <HomeLayout>
          <RouteWrapper routeType="protected">
            <Comment />
          </RouteWrapper>
        </HomeLayout>
      ),
    },
    {
      path: "/photos",
      element: (
        <HomeLayout>
          <RouteWrapper routeType="protected">
            <Photos />
          </RouteWrapper>
        </HomeLayout>
      ),
    },
    {
      path: "/my-profile",
      element: (
        <ProfileLayout>
          <RouteWrapper routeType="protected">
            <MyProfile />
          </RouteWrapper>
        </ProfileLayout>
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
          path: "deactive-account",
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
