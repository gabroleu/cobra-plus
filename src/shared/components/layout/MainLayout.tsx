import {
  LayoutDashboard,
  Users,
  FileText,
  CreditCard,
  Calendar,
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
</aside>

        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}