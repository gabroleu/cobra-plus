import { MetricCard } from "../../../shared/components/ui/MetricCard";
import { metrics } from "../data/metrics";

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
    </div>
  );
}