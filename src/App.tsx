import { useState } from "react";
import { MainLayout } from "./shared/components/layout/MainLayout";
import { Dashboard } from "./modules/dashboard/pages/Dashboard";
import { Clients } from "./modules/dashboard/pages/Clients";

function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");

  return (
    <MainLayout
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
    >
      {currentPage === "dashboard" && <Dashboard />}
      {currentPage === "clients" && <Clients />}
    </MainLayout>
  );
}

export default App;