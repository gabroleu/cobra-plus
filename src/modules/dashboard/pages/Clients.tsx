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

        <div className="text-center py-16 text-gray-400">
          Nenhum cliente cadastrado
        </div>
      </section>
    </div>
  );
}