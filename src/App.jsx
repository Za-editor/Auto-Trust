import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/mainLayout";
import Signup from "./Pages/SignUp";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import EmailVerification from "./Pages/EmailVerification";
import ForgotPassword from "./Pages/ForgotPasswod";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
          <Route path={"/"} element={<HomePage/>}/>
          <Route path={"/signup"} element={<Signup/>}/>
            <Route path={"/login"} element={<LoginPage />} />
            <Route path={ "verification"} element={<EmailVerification />} />
            <Route path={ "forgotPassword"} element={<ForgotPassword />} />
          </Route>
      </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
