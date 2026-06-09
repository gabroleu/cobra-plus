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

        <div className="text-center py-16 text-gray-400">
          Nenhum contrato cadastrado
        </div>
      </section>
    </div>
  );
}