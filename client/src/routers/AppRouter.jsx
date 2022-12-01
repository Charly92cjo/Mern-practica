import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import AccountPage from "../pages/AccountPage";
import ProjectsPage from "../pages/ProjectsPage";
import ProjectPage from "../pages/ProjectPage";
import NotFoundPage from "../pages/NotFoundPage";
import UserPage from "../pages/admin/UserPage";
import Layout from "../components/Layouts/Layout";

const AppRouter = () => {
  return (
    <Router>
      <Layout>
        {/* <Navigation /> */}
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/register" element={<RegisterPage />} />
          <Route exact path="/account" element={<AccountPage />} />
          <Route exact path="/projects" element={<ProjectsPage />} />
          <Route exact path="/project/:projectId" element={<ProjectPage />} />
          <Route exact path="/admin/users" element={<UserPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRouter;
