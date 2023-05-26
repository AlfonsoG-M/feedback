import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import LoginContainer from "../components/pages/login/LoginContainer";
import Layout from "../components/layout/Layout/Layout";
import ProtectedRoute from "./ProtectedRoute";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginContainer />} />
      <Route element={<ProtectedRoute />}>
        <Route element={<Layout />}>
          {routes.map(({ id, path, Element }) => (
            <Route path={path} element={<Element />} key={id} />
          ))}
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRouter;
