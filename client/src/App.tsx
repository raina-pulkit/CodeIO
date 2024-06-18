import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import ForgotPassword from "./pages/auth/forgotPassword";
import PageNotFound from "./pages/404-page";
import NavBar from "./_components/navbar/navbar";
import AuthOutlet from "@auth-kit/react-router/AuthOutlet";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <>
      <NavBar />
      <div className="p-10 pt-28 flex flex-col min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login/password-reset" element={<ForgotPassword />} />

          <Route element={<AuthOutlet fallbackPath="/login" />}>
            <Route path="/u" element={<Dashboard />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
