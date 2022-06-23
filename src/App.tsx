import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { useAuthContext } from "./lib/hooks/context/AuthContext/AuthContext";

function App() {
  const { user } = useAuthContext();

  return user !== null ? <Home /> : <Login />;
}

export default App;
