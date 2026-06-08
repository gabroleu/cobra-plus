import { clients } from "../data/clients";

export function Clients() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Clientes
        </h1>

        <p className="text-sm text-slate-500 mt-1">
          Gerencie todos os clientes cadastrados.
        </p>
      </div>

      <section className="bg-white border border-gray-200 rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">
            Lista de Clientes
          </h2>

          <button className="px-4 py-2 bg-primary text-white rounded-lg hover:opacity-90">
            Novo Cliente
          </button>
        </div>

        <div className="overflow-x-auto">
  <table className="w-full">
    <thead>
      <tr className="border-b border-gray-200 text-left">
        <th className="pb-3">Nome</th>
        <th className="pb-3">Telefone</th>
        <th className="pb-3">Status</th>
        <th className="pb-3">Ações</th>
      </tr>
    </thead>

    <tbody>
      {clients.map((client) => (
        <tr
          key={client.id}
          className="border-b border-gray-100"
        >
          <td className="py-4">
            {client.name}
          </td>

          <td className="py-4">
            {client.phone}
          </td>

          <td className="py-4">
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                client.status === "Ativo"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {client.status}
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