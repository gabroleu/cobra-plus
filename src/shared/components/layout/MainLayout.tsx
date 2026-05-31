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


export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-black">
      <div className="flex">
        <aside className="w-64 h-screen border-r bg-white flex flex-col">
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
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg ${
            item.active
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

        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}