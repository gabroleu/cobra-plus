import {  useState } from "react";
import {
  LayoutDashboard,
  Users,
  FileText,
  CreditCard,
  Calendar,
  Settings,
  LogOut,
  PlusSquare,
  LifeBuoy,
  Moon,
  Menu,
} from "lucide-react";

const menuItems = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    active: true,
  },
  {
    label: "Clientes",
    icon: Users,
  },
  {
    label: "Contratos",
    icon: FileText,
  },
  {
    label: "Cobranças",
    icon: CreditCard,
  },
  {
    label: "Calendário",
    icon: Calendar,
  },
  {
    label: "Novo Contrato",
    icon: PlusSquare,
  },
  {
    label: "Suporte",
    icon: LifeBuoy,
  },
];


type MainLayoutProps = {
  children: React.ReactNode;
  currentPage: string;
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
};

export function MainLayout({
  children,
  currentPage,
  setCurrentPage,
}: MainLayoutProps) {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-black">
      <div className="flex">
        <aside className="hidden md:flex md:w-64 h-screen border-r bg-white flex-col">
  <div className="p-6 border-b">
    <h1 className="text-3xl font-extrabold text-primary">
      Cobra+
    </h1>
  </div>

  <nav className="flex-1 p-4 mt-4">
    <ul className="space-y-2">
  {menuItems.map((item) => {
    const Icon = item.icon;

    return (
      <li key={item.label}>
        <button
  onClick={() => {
    if (item.label === "Dashboard") {
      setCurrentPage("dashboard");
    }

    if (item.label === "Clientes") {
      setCurrentPage("clients");
    }

    if (item.label === "Contratos") {
      setCurrentPage("contracts");
} 
    if (item.label === "Cobranças") {
      setCurrentPage("charges");
    }

  }}
  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg ${
    (item.label === "Dashboard" && currentPage === "dashboard") ||
    (item.label === "Clientes" && currentPage === "clients") ||
    (item.label === "Contratos" && currentPage === "contracts") ||
    (item.label === "Cobranças" && currentPage === "charges")
      ? "bg-blue-50 text-primary font-medium"
      : "hover:bg-gray-100"
  }`}
>
          <Icon size={18} />
          {item.label}
        </button>
      </li>
    );
  })}
</ul>
  </nav>
    
    <div className="border-t p-4 mt-auto">
    <div className="mb-4">
    <p className="font-semibold">Gabriel Chaves</p>
    <p className="text-sm text-gray-500">
      Administrador
    </p>
  </div>

  <button className="w-full flex items-center gap-3 py-2 rounded-lg hover:bg-gray-100">
  <Moon size={18} />
    Tema Escuro
  </button>

  <div className="space-y-1">
    <button className="w-full flex items-center gap-3 py-2 rounded-lg hover:bg-gray-100">
      <Settings size={18} />
      Configurações
    </button>

    <button className="w-full flex items-center gap-3 py-2 rounded-lg hover:bg-gray-100 text-red-600">
      <LogOut size={18} />
      Sair
    </button>
  </div>
</div>
</aside>

        <main className="flex-1 p-4 md:p-6">
  <div className="md:hidden mb-4">
    <button
      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      className="p-2 rounded-lg border border-gray-200 bg-white"
    >
      <Menu size={22} />
    </button>
  </div>

  {mobileMenuOpen && (
  <div className="md:hidden fixed inset-0 z-50">
    
    <div
      className="absolute inset-0 bg-black/30"
      onClick={() => setMobileMenuOpen(false)}
    />

    <div className="absolute left-0 top-0 h-full w-72 bg-white shadow-xl border-r flex flex-col">
      <div className="p-6 border-b">
        <h2 className="text-2xl font-bold text-primary">
          Cobra+
        </h2>
      </div>

      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.label}>
                <button
                  onClick={() => {
                    if (item.label === "Dashboard") {
                    setCurrentPage("dashboard");
                    setMobileMenuOpen(false);
              }

                    if (item.label === "Clientes") {
                    setCurrentPage("clients");
                    setMobileMenuOpen(false);
              }

                    if (item.label === "Contratos") {
                    setCurrentPage("contracts");
                    setMobileMenuOpen(false);
              }

                    if (item.label === "Cobranças") {
                      setCurrentPage("charges");
                      setMobileMenuOpen(false);
                    }
            }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg ${
                    (item.label === "Dashboard" && currentPage === "dashboard") ||
                    (item.label === "Clientes" && currentPage === "clients") ||
                    (item.label === "Contratos" && currentPage === "contracts") ||
                    (item.label === "Cobranças" && currentPage === "charges")
                    ? "bg-blue-50 text-primary font-medium"
                    : "hover:bg-gray-100"
                  }`}
                >
                  
                  <Icon size={18} />
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="mt-auto border-t p-4">
        <p className="font-semibold">
          Gabriel Chaves
       </p>

        <p className="text-sm text-gray-500">
          Administrador
        </p>
      </div>
    </div>

  </div>
)}

  {children}
</main>
      </div>
    </div>
  );
}