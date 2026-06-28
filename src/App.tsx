import { useState } from "react";
import { MainLayout } from "./shared/components/layout/MainLayout";
import { Dashboard } from "./modules/dashboard/pages/Dashboard";
import { Clients } from "./modules/dashboard/pages/Clients";
import { Contracts } from "./modules/dashboard/pages/Contracts";
import { Charges } from "./modules/dashboard/pages/Charges";

function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");

  console.log("Página atual:", currentPage);

  return (
    <MainLayout
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
    >
      {currentPage === "dashboard" && <Dashboard />}
      {currentPage === "clients" && <Clients />}
      {currentPage === "contracts" && <Contracts />}
      {currentPage === "charges" && <Charges />}
    </MainLayout>
  );
}

export default App;