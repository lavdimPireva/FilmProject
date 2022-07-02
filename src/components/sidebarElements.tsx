import { AccountBox, PrivacyTip } from "@mui/icons-material";
import { grey } from "@mui/material/colors";
import { Item } from "../layout/HomeLayout/HomeSidebar/Sidebar";

export const homeItems: Item[] = [
  {
    text: "Post",
    icon: <AccountBox fontSize="large" sx={{ color: grey[500] }} />,
    path: "/posts",
  },
  {
    text: "Comment",
    icon: <PrivacyTip fontSize="large" sx={{ color: grey[500] }} />,
    path: "/comments",
  },

  {
    text: "Photos",
    icon: (
      <AccountBox
        fontSize="large"
        sx={{
          color: grey[500],
        }}
      />
    ),
    path: "/photos",
  },
];

export const movieItems: Item[] = [
  {
    text: "Action",
    icon: <AccountBox fontSize="large" sx={{ color: grey[500] }} />,
    path: "/my-movie/action",
  },
  {
    text: "Thriller",
    icon: <PrivacyTip fontSize="large" sx={{ color: grey[500] }} />,
    path: "/my-movie/thriller",
  },

  {
    text: "Comedy",
    icon: (
      <AccountBox
        fontSize="large"
        sx={{
          color: grey[500],
        }}
      />
    ),
    path: "/my-movie/comedy",
  },
];

export const profileItems: Item[] = [
  {
    text: "Account",
    icon: <AccountBox fontSize="large" sx={{ color: grey[500] }} />,
    path: "/my-profile/account",
  },
  {
    text: "Privacy",
    icon: <PrivacyTip fontSize="large" sx={{ color: grey[500] }} />,
    path: "/my-profile/privacy",
  },

  {
    text: "Deactive Account",
    icon: (
      <AccountBox
        fontSize="large"
        sx={{
          color: grey[500],
        }}
      />
    ),
    path: "/my-profile/deactive-account",
  },
];
