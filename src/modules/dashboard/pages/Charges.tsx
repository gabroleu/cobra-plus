import { SelectInput } from "../../../shared/components/ui/SelectInput";
import { TextInput } from "../../../shared/components/ui/TextInput";
import { Modal } from "../../../shared/components/ui/Modal";
import { PageHeader } from "../../../shared/components/ui/PageHeader";
import { StatusBadge } from "../../../shared/components/ui/StatusBadge";
import { useEffect, useState } from "react";
import { charges } from "../data/charges";
import { clients } from "../data/clients";
import { contracts } from "../data/contracts";

type Charge = {
  id: string;
  client: string;
  contract: string;
  amount: string;
  dueDate: string;
  status: string;
};

export function Charges() {

  const [showModal, setShowModal] = useState(false);

  const [chargesList, setChargesList] = useState<Charge[]>(() => {
  const savedCharges = localStorage.getItem("cobra_charges");

  if (savedCharges) {
    return JSON.parse(savedCharges) as Charge[];
  }

  return charges;
});

const [client, setClient] = useState("");
const [contract, setContract] = useState("");
const [amount, setAmount] = useState("");
const [dueDate, setDueDate] = useState("");
const [status, setStatus] = useState("Pendente");

useEffect(() => {
  localStorage.setItem(
    "cobra_charges",
    JSON.stringify(chargesList)
  );
}, [chargesList]);


  function handleAddCharge() {
  if (
    !client.trim() ||
    !contract.trim() ||
    !amount.trim() ||
    !dueDate.trim()
  ) {
    return;
  }

  const selectedClient = clients.find(
  (item) => item.id === client
);

const selectedContract = contracts.find(
  (item) => item.id === contract
);

if (!selectedClient || !selectedContract) {
  return;
}

  const newCharge: Charge = {
  id: Date.now().toString(),
  client: selectedClient.name,
  contract: `Contrato ${selectedContract.id.padStart(3, "0")}`,
  amount,
  dueDate,
  status,
};

  setChargesList((prev) => [...prev, newCharge]);

  setClient("");
  setContract("");
  setAmount("");
  setDueDate("");
  setStatus("Pendente");

  setShowModal(false);
}

  return (
    <div className="space-y-6">
      <PageHeader
        title="Cobranças"
        description="Gerencie todas as cobranças do sistema."
      />

      <section className="bg-white border border-gray-200 rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">
            Lista de Cobranças
          </h2>

          <button
            onClick={() => setShowModal(true)}
            className="px-4 py-2 bg-primary text-white rounded-lg hover:opacity-90"
          >
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
      {chargesList.map((charge) => (
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
            <StatusBadge status={charge.status} />
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
  {chargesList.map((charge) => (
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
       {showModal && (
  <Modal
    title="Nova Cobrança"
    onClose={() => setShowModal(false)}
  >
    <div className="space-y-4">

     <SelectInput
  label="Cliente"
  value={client}
  onChange={(e) => setClient(e.target.value)}
>
  <option value="">Selecione um cliente</option>

  {clients.map((client) => (
    <option
      key={client.id}
      value={client.id}
    >
      {client.name}
    </option>
  ))}
</SelectInput>

      <SelectInput
  label="Contrato"
  value={contract}
  onChange={(e) => setContract(e.target.value)}
>
  <option value="">Selecione um contrato</option>

  {contracts.map((contract) => (
    <option
      key={contract.id}
      value={contract.id}
    >
      {`Contrato ${contract.id.padStart(3, "0")}`}
    </option>
  ))}
</SelectInput>

      <TextInput
        label="Valor"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="R$ 0,00"
      />

      <TextInput
        label="Vencimento"
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />

     <SelectInput
  label="Status"
  value={status}
  onChange={(e) => setStatus(e.target.value)}
>
  <option>Pendente</option>
  <option>Atrasado</option>
  <option>Pago</option>
</SelectInput>

      <div className="flex justify-end gap-2 pt-2">
        <button
          onClick={() => setShowModal(false)}
          className="px-4 py-2 border rounded-lg"
        >
          Cancelar
        </button>

        <button
          onClick={handleAddCharge}
          className="px-4 py-2 bg-primary text-white rounded-lg"
        >
          Salvar
        </button>
      </div>

    </div>
  </Modal>
)}
    </div>
  );
}