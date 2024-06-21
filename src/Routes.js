import Home from "./pages/home";
import Login from "./pages/Login";
import App from "./pages/App";
//import Home, {Home2} from "./pages/home";
import {BrowserRouter as Rota, Route, Routes } from "react-router-dom";

const AppRoutes = () => {
    return (
      <>
        <Rota>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/Login"} element={<Login />} />
          </Routes>
        </Rota>
      </>
    );
}

export default AppRoutes