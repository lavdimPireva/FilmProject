import { Toolbar } from "@mui/material";
import { useAuthContext } from "../../lib/hooks/context/AuthContext/AuthContext";
import { Header } from "../Header/Header";

interface Props {
  children: JSX.Element;
  sidebar: JSX.Element;
}

export const Layout = ({ children, sidebar }: Props) => {
  const { user } = useAuthContext();

  return (
    <div style={{ display: "flex" }}>
      {user && (
        <>
          <Header />
          {sidebar}
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
