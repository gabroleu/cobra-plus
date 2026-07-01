import { charges } from "../data/charges";
export function Charges() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Cobranças
        </h1>

        <p className="text-sm text-slate-500 mt-1">
          Gerencie todas as cobranças do sistema.
        </p>
      </div>

      <section className="bg-white border border-gray-200 rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">
            Lista de Cobranças
          </h2>

          <button className="px-4 py-2 bg-primary text-white rounded-lg hover:opacity-90">
            Nova Cobrança
          </button>
        </div>

<div className="hidden md:block overflow-x-auto">
  <table className="w-full">
    <thead>
      <tr className="border-b border-gray-200 text-left">
        <th className="pb-3">Cliente</th>
        <th className="pb-3">Contrato</th>
        <th className="pb-3">Valor</th>
        <th className="pb-3">Vencimento</th>
        <th className="pb-3">Status</th>
        <th className="pb-3">Ações</th>
      </tr>
    </thead>

    <tbody>
      {charges.map((charge) => (
        <tr
          key={charge.id}
          className="border-b border-gray-100"
        >
          <td className="py-4">
            {charge.client}
          </td>

          <td className="py-4">
            {charge.contract}
          </td>

          <td className="py-4 font-semibold">
            {charge.amount}
          </td>

          <td className="py-4">
            {charge.dueDate}
          </td>

          <td className="py-4">
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                charge.status === "Atrasado"
                  ? "bg-red-100 text-red-700"
                  : charge.status === "Pendente"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-green-100 text-green-700"
              }`}
            >
              {charge.status}
            </span>
          </td>

          <td className="py-4">
            <button className="px-3 py-1 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition">
              Cobrar
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

{/* Mobile */}
<div className="md:hidden space-y-4">
  {charges.map((charge) => (
    <div
      key={charge.id}
      className="border border-gray-200 rounded-xl p-4"
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold text-lg">
            {charge.client}
          </h3>

          <p className="text-sm text-gray-500">
            {charge.contract}
          </p>
        </div>

        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            charge.status === "Atrasado"
              ? "bg-red-100 text-red-700"
              : charge.status === "Pendente"
              ? "bg-yellow-100 text-yellow-700"
              : "bg-green-100 text-green-700"
          }`}
        >
          {charge.status}
        </span>
      </div>

      <div className="mt-4 space-y-1 text-sm text-gray-600">
        <p>
          <strong>Valor:</strong> {charge.amount}
        </p>

        <p>
          <strong>Vencimento:</strong> {charge.dueDate}
        </p>
      </div>

      <button className="mt-4 w-full px-4 py-2 bg-primary text-white rounded-lg hover:opacity-90">
        Cobrar
      </button>
    </div>
  ))}
</div>

      </section>
    </div>
  );
}