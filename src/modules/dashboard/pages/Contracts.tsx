import { contracts } from "../data/contracts"; 


export function Contracts() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Contratos
        </h1>

        <p className="text-sm text-slate-500 mt-1">
          Gerencie todos os contratos cadastrados.
        </p>
      </div>

      <section className="bg-white border border-gray-200 rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">
            Lista de Contratos
          </h2>

          <button className="px-4 py-2 bg-primary text-white rounded-lg hover:opacity-90">
            Novo Contrato
          </button>
        </div>

        <div className="overflow-x-auto">
  <table className="w-full">
    <thead>
      <tr className="border-b border-gray-200 text-left">
        <th className="pb-3">Cliente</th>
        <th className="pb-3">Valor</th>
        <th className="pb-3">Vencimento</th>
        <th className="pb-3">Status</th>
        <th className="pb-3">Ações</th>
      </tr>
    </thead>

    <tbody>
      {contracts.map((contract) => (
        <tr
          key={contract.id}
          className="border-b border-gray-100"
        >
          <td className="py-4">
            {contract.client}
          </td>

          <td className="py-4 font-semibold">
            {contract.amount}
          </td>

          <td className="py-4">
            {contract.dueDate}
          </td>

          <td className="py-4">
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                contract.status === "Ativo"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {contract.status}
            </span>
          </td>

          <td className="py-4">
            <button className="text-primary hover:underline">
              Ver
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
      </section>
    </div>
  );
}