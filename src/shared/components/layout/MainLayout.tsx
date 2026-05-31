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
      <li>
        <button className="w-full text-left px-4 py-3 rounded-lg bg-blue-50 text-primary font-medium">
          Dashboard
        </button>
      </li>

      <li>
        <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100">
          Clientes
        </button>
      </li>

      <li>
        <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100">
          Contratos
        </button>
      </li>

      <li>
        <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100">
          Cobranças
        </button>
      </li>

      <li>
        <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100">
          Calendário
        </button>
      </li>
    </ul>
  </nav>
</aside>

        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}type Props = {
  title: string;
  value: string;
  description?: string;
  variant?: "default" | "alert";
};

export function MetricCard({
  title,
  value,
  description,
  variant = "default",
}: Props) {
  const isAlert = variant === "alert";

  return (
    <div
      className={`border rounded-xl p-4 shadow-sm ${
        isAlert
          ? "bg-orange-50 border-orange-300"
          : "bg-white border-gray-200"
      }`}
    >
      <span className="text-sm text-gray-500">{title}</span>

      <h2
        className={`text-2xl font-bold ${
          isAlert ? "text-orange-600" : "text-primary"
        }`}
      >
        {value}
      </h2>

      {description && (
        <p className="text-xs text-gray-400 mt-1">{description}</p>
      )}
    </div>
  );
}