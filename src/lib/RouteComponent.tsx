import { useRoutes } from "react-router-dom";
import { RouteWrapper } from "../components/ProtectedRoute/RouteWrapper";
import { Layout } from "../layout/HomeLayout/Layout";
import { Sidebar } from "../layout/HomeLayout/HomeSidebar/Sidebar";
import { Account } from "../pages/Account/Account";
import { Action } from "../pages/Action/Action";
import { Comedy } from "../pages/Comedy/Comedy";
import { Comment } from "../pages/Comment/Comment";
import { DeactiveAccount } from "../pages/DeactiveAccount/DeactiveAccount";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";
import { MyMovies } from "../pages/MyMovies/MyMovies";
import { MyProfile } from "../pages/MyProfile/MyProfile";
import { Photos } from "../pages/Photos/Photos";
import Posts from "../pages/Posts/Posts";
import { Privacy } from "../pages/Privacy/Privacy";
import { Register } from "../pages/Register/Register";
import { Thriller } from "../pages/Thriller/Thriller";
import {
  homeItems,
  movieItems,
  profileItems,
} from "../components/sidebarElements";

export const RouteComponent = () => {
  const element = useRoutes([
    {
      path: "/",
      element: (
        <Layout sidebar={<Sidebar items={homeItems} />}>
          <RouteWrapper routeType="protected">
            <Home />
          </RouteWrapper>
        </Layout>
      ),
    },

    {
      path: "/my-movie",
      element: (
        <Layout sidebar={<Sidebar items={movieItems} />}>
          <RouteWrapper routeType="protected">
            <MyMovies />
          </RouteWrapper>
        </Layout>
      ),
      children: [
        {
          path: "action",
          element: <Action />,
        },
        {
          path: "thriller",
          element: <Thriller />,
        },
        {
          path: "comedy",
          element: <Comedy />,
        },
      ],
    },

    {
      path: "/posts",
      element: (
        <Layout sidebar={<Sidebar items={homeItems} />}>
          <RouteWrapper routeType="protected">
            <Posts />
          </RouteWrapper>
        </Layout>
      ),
    },
    {
      path: "/comments",
      element: (
        <Layout sidebar={<Sidebar items={homeItems} />}>
          <RouteWrapper routeType="protected">
            <Comment />
          </RouteWrapper>
        </Layout>
      ),
    },
    {
      path: "/photos",
      element: (
        <Layout sidebar={<Sidebar items={homeItems} />}>
          <RouteWrapper routeType="protected">
            <Photos />
          </RouteWrapper>
        </Layout>
      ),
    },

    {
      path: "/my-profile",
      element: (
        <Layout sidebar={<Sidebar items={profileItems} />}>
          <RouteWrapper routeType="protected">
            <MyProfile />
          </RouteWrapper>
        </Layout>
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
