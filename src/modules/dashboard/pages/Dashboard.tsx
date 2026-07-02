import { PageHeader } from "../../../shared/components/ui/PageHeader";
import { MetricCard } from "../../../shared/components/ui/MetricCard";
import { metrics } from "../data/metrics";
import { charges } from "../data/charges";
import { timeline } from "../data/timeline";

export function Dashboard() {
  return (
    <div className="space-y-6">
      <PageHeader
  title="Dashboard"
  description="Acompanhe cobranças, contratos e receba+."
  actions={
    <div className="flex items-center gap-2">
      <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>

      <span className="text-sm text-slate-500 font-medium">
        Online
      </span>
    </div>
  }
/>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((item, index) => (
          <MetricCard
            key={index}
            title={item.title}
            value={item.value}
            description={item.description}
            variant={item.variant as "default" | "alert"}
          />
        ))}
      </div>

      <section className="bg-white border border-gray-200 rounded-xl p-6">
  <h2 className="text-lg font-semibold mb-4">
    
    Cobranças do Dia
  </h2>

    <div className="hidden md:grid md:grid-cols-5 gap-4 pb-3 border-b text-sm font-medium text-gray-500">
        <span>Cliente</span>
        <span>Vencimento</span>
        <span>Valor</span>
        <span>Status</span>
        <span>Ações</span>
    </div>


  <div>
  {charges.map((charge) => (
    <div key={charge.id}>
      
      {/* Desktop */}
      <div className="hidden md:grid md:grid-cols-5 gap-4 py-4 border-b border-gray-100 items-center">
        <span className="font-medium">
          {charge.client}
        </span>

        <span className="text-gray-500">
          {charge.dueDate}
        </span>

        <span className="font-semibold">
          {charge.amount}
        </span>

        <div>
          <span
            className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
              charge.status === "atrasado"
                ? "bg-red-100 text-red-700"
                : charge.status === "pendente"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-green-100 text-green-700"
            }`}
          >
            {charge.status}
          </span>
        </div>

        <div>
          <button className="px-3 py-1 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition">
            Cobrar
          </button>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden border border-gray-200 rounded-xl p-4 mb-4">
        <p className="font-semibold text-lg">
          {charge.client}
        </p>

        <div className="mt-3 space-y-1 text-sm text-gray-600">
          <p>Vencimento: {charge.dueDate}</p>
          <p>Valor: {charge.amount}</p>
        </div>

        <div className="mt-3">
          <span
            className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
              charge.status === "atrasado"
                ? "bg-red-100 text-red-700"
                : charge.status === "pendente"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-green-100 text-green-700"
            }`}
          >
            {charge.status}
          </span>
        </div>

        <button className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-lg">
          Cobrar
        </button>
      </div>

    </div>
  ))}
</div>
</section>

<section className="bg-white border border-gray-200 rounded-xl p-6">
  <h2 className="text-lg font-semibold mb-4">
    Timeline de Cobranças
  </h2>

  <div className="space-y-4">
    {timeline.map((item) => (
      <div
        key={item.label}
        className="border border-gray-100 rounded-xl p-4"
      >
        <div className="flex items-center gap-6">
          <span className="text-5xl font-bold text-primary">
           {item.quantity}
         </span>

         <div>
            <p className="text-lg font-medium">
             {item.label}
            </p>

    <p className="text-2xl font-bold text-slate-800">
      {item.amount}
    </p>
  </div>
</div>
      </div>
    ))}
  </div>
</section>


    </div>
  );
}