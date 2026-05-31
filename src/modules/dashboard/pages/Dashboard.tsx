import { MetricCard } from "../../../shared/components/ui/MetricCard";
import { metrics } from "../data/metrics";
import { charges } from "../data/charges";

export function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>

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

  <div className="space-y-3">
    {charges.map((charge) => (
      <div
        key={charge.id}
        className="flex items-center justify-between border-b border-gray-100 pb-3"
      >
        <div>
          <p className="font-medium">{charge.client}</p>

          <p className="text-sm text-gray-500">
            Vencimento: {charge.dueDate}
          </p>
        </div>

        <div className="text-right">
          <p className="font-semibold">
            {charge.amount}
          </p>

          <span className="text-sm text-orange-600">
            {charge.status}
          </span>
        </div>
      </div>
    ))}
  </div>
</section>


    </div>
  );
}