import { MainLayout } from "./shared/components/layout/MainLayout";
import { Dashboard } from "./modules/dashboard/pages/Dashboard";

function App() {
  return (
    <MainLayout>
      <Dashboard />
    </MainLayout>
  );
}

export default App;