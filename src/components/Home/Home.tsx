import { Header } from "../../layout/Header/Header";
import { Sidebar } from "../../layout/Sidebar/Sidebar";
import { useAuthContext } from "../../lib/hooks/context/AuthContext/AuthContext";

interface Props {
  user: string;
  onLogout: () => void;
}

export const Home = ({ user, onLogout }: Props) => {
  const context = useAuthContext();

  return (
    <div>
      <Header onLogout={onLogout} />
      <div>
        <Sidebar />
      </div>
      <main>
        <h1>Welcome {user.split("@")[0]!}</h1>
      </main>
    </div>
  );
};
