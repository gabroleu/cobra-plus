import { MetricCard } from "../../../shared/components/ui/MetricCard";
import { metrics } from "../data/metrics";
import { charges } from "../data/charges";

export function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
      <div>
          <h1 className="text-3xl font-bold text-slate-900">
              Dashboard
          </h1>

        <p className="text-sm text-slate-500 mt-1">
            Acompanhe cobranças, contratos e indicadores financeiros.
        </p>
      </div>

      <div className="text-right">
        <p className="text-sm text-slate-500">
            Atualizado agora
        </p>
      </div>
      </div>

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

    <div className="grid grid-cols-5 gap-4 pb-3 border-b text-sm font-medium text-gray-500">
        <span>Cliente</span>
        <span>Vencimento</span>
        <span>Valor</span>
        <span>Status</span>
        <span>Ações</span>
    </div>


  <div>
  {charges.map((charge) => (
    <div
      key={charge.id}
      className="grid grid-cols-5 gap-4 py-4 border-b border-gray-100 items-center"
    >
      <span className="font-medium">
        {charge.client}
      </span>

      <span className="text-gray-500">
        {charge.dueDate}
      </span>

      <span className="font-semibold">
        {charge.amount}
      </span>

      <span className="text-orange-600">
        {charge.status}
      </span>

      <div>
        <button className="text-blue-600 hover:underline">
          Ver
        </button>
      </div>
    </div>
  ))}
</div>
</section>


    </div>
  );
}