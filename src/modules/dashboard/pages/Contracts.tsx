import { SecondaryButton } from "../../../shared/components/ui/SecondaryButton";
import { SelectInput } from "../../../shared/components/ui/SelectInput";
import { TextInput } from "../../../shared/components/ui/TextInput";
import { Modal } from "../../../shared/components/ui/Modal";
import { PageHeader } from "../../../shared/components/ui/PageHeader";
import { StatusBadge } from "../../../shared/components/ui/StatusBadge";
import { useEffect, useState } from "react";
import { contracts } from "../data/contracts"; 

type Contract = {
  id: string;
  client: string;
  amount: string;
  dueDate: string;
  status: string;
};


export function Contracts() {
  const [showModal, setShowModal] = useState(false);
  const [contractsList, setContractsList] = useState<Contract[]>(() => {
  const savedContracts = localStorage.getItem("cobra_contracts");

  if (savedContracts) {
    return JSON.parse(savedContracts) as Contract[];
  }

  return contracts;
});

  const [client, setClient] = useState("");
  const [amount, setAmount] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [status, setStatus] = useState("Ativo");

  useEffect(() => {
  localStorage.setItem(
    "cobra_contracts",
    JSON.stringify(contractsList)
  );
}, [contractsList]);

function handleAddContract() {
  if (
    !client.trim() ||
    !amount.trim() ||
    !dueDate.trim()
  ) {
    return;
  }

  const newContract: Contract = {
    id: Date.now().toString(),
    client,
    amount,
    dueDate,
    status,
  };

  setContractsList((prev) => [...prev, newContract]);

  setClient("");
  setAmount("");
  setDueDate("");
  setStatus("Ativo");

  setShowModal(false);
}

  return (
    <div className="space-y-6">
      <PageHeader
        title="Contratos"
        description="Gerencie todos os contratos cadastrados."
      />

      <section className="bg-white border border-gray-200 rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">
            Lista de Contratos
          </h2>

          <button
            onClick={() => setShowModal(true)}
            className="px-4 py-2 bg-primary text-white rounded-lg hover:opacity-90"
          >
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
      {contractsList.map((contract) => (
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
            <StatusBadge status={contract.status} />
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

 {showModal && (
  <Modal
    title="Novo Contrato"
    onClose={() => setShowModal(false)}
  >
    <div className="space-y-4">

      <SelectInput
        label="Cliente"
        value={client}
        onChange={(e) => setClient(e.target.value)}
      >
        <option value="">Selecione um cliente</option>
        <option>Gabriel Silva</option>
        <option>Gabriel Chaves</option>
        <option>Roberto Gabriel</option>
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
        <option>Ativo</option>
        <option>Inativo</option>
      </SelectInput>

      <div className="flex justify-end gap-2 pt-2">
        <SecondaryButton
          onClick={() => setShowModal(false)}
        >
          Cancelar
        </SecondaryButton>

        <button
          onClick={handleAddContract}
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