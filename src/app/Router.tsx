import { Route, Routes } from "react-router";
import Intro from "../pages/Intro";
import Dashboard from "../pages/Dashboard";

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default Router;
