import { Toolbar } from "@mui/material";
import { useAuthContext } from "../../lib/hooks/context/AuthContext/AuthContext";
import { Header } from "../Header/Header";
import { ProfileSidebar } from "./ProfileSidebar/ProfileSidebar";

interface Props {
  children: JSX.Element;
}

export const ProfileLayout = ({ children }: Props) => {
  const { user } = useAuthContext();

  return (
    <div style={{ display: "flex" }}>
      {user && (
        <>
          <Header />
          <ProfileSidebar />
        </>
      )}

      <div
        style={{
          width: "100%",
          marginLeft: "20px",
          marginTop: "20px",
        }}
      >
        <Toolbar />
        {children}
      </div>
    </div>
  );
};
