import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { useAuthContext } from "./lib/hooks/context/AuthContext/AuthContext";
import { Route, Routes } from "react-router-dom";
import { MyProfile } from "./pages/MyProfile/MyProfile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/my-profile" element={<MyProfile />} />
    </Routes>
  );
}

export default App;
