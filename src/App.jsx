import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/mainLayout";
import Signup from "./Pages/SignUp";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
          <Route path={"/"} element={<HomePage/>}/>
          <Route path={"/signup"} element={<Signup/>}/>
          <Route path={"/login"} element={<LoginPage/>}/>
          </Route>
      </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
