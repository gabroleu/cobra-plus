import { MetricCard } from "../../../shared/components/ui/MetricCard";

export function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Total a receber"
          value="R$ 10.000"
          description="Valores pendentes no sistema"
        />

        <MetricCard
          title="Recebido hoje"
          value="R$ 500"
          description="Pagamentos confirmados hoje"
        />

        <MetricCard
          title="Em atraso"
          value="R$ 2.000"
          description="Cobranças vencidas"
          variant="alert"
        />

        <MetricCard
          title="Contratos"
          value="12"
          description="Total de contratos ativos"
        />
      </div>
    </div>
  );
}