import { useAuthContext } from "../../lib/hooks/context/AuthContext/AuthContext";
import { Header } from "../Header/Header";
import { Sidebar } from "../Sidebar/Sidebar";

interface Props {
  children: JSX.Element;
}

export const Home = ({ children }: Props) => {
  const { user } = useAuthContext();

  return (
    <div style={{ display: "flex" }}>
      {user && (
        <>
          <Header />
          <Sidebar />
        </>
      )}

      <div
        style={{
          width: "100%",
        }}
      >
        {children}
      </div>
    </div>
  );
};
