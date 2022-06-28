import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../lib/hooks/context/AuthContext/AuthContext";
import { Header } from "../Header/Header";
import { Sidebar } from "../Sidebar/Sidebar";

interface Props {
  children: JSX.Element;
}

export const Home = ({ children }: Props) => {
  const { user, onLogout } = useAuthContext();
  const navigate = useNavigate();

  return (
    <div>
      {user && (
        <>
          <Header />
          <Sidebar />
        </>
      )}

      {/* Children */}
      <div
        style={{
          background: "",
          width: "100%",
        }}
      >
        {children}
      </div>
    </div>
  );
};
