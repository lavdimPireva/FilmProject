import { useState } from "react";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { useAuthContext } from "./lib/hooks/context/AuthContext/AuthContext";

function App() {
  const [user, setUser] = useState<string | null>(() =>
    localStorage.getItem("user")
  );

  const handleLogin = (username: string) => {
    console.log("brenda handleLogin");

    setUser(username);
    localStorage.setItem("user", username);
  };

  const handleLogout = (username: void) => {
    setUser(null);
    localStorage.removeItem("user");
    window.location.reload();
  };

  return user !== null ? (
    <Home user={user} onLogout={handleLogout} />
  ) : (
    <Login onLogin={handleLogin} />
  );
}

export default App;
