import { FilterSelect } from "../../../shared/components/ui/FilterSelect";
import { SecondaryButton } from "../../../shared/components/ui/SecondaryButton";
import { PrimaryButton } from "../../../shared/components/ui/PrimaryButton";
import { TextInput } from "../../../shared/components/ui/TextInput";
import { Modal } from "../../../shared/components/ui/Modal";
import { PageHeader } from "../../../shared/components/ui/PageHeader";
import { StatusBadge } from "../../../shared/components/ui/StatusBadge";
import { useEffect, useState } from "react";
import { clients } from "../data/clients";

  type Client = {
    id: string;
    name: string;
    phone: string;
    status: string;
  };

export function Clients() {
  const [showModal, setShowModal] = useState(false);
  const [clientsList, setClientsList] = useState<Client[]>(() => {
    const savedClients = localStorage.getItem("cobra_clients");

    if(savedClients) {
      return JSON.parse(savedClients) as Client[];
    }

    return clients;
});

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("Todos");


  const filteredClients = clientsList.filter((client) => {
  const searchTerm = search.toLowerCase();

  return (
    client.name.toLowerCase().includes(searchTerm) ||
    client.phone.toLowerCase().includes(searchTerm)
  );
});

    useEffect(() => {
    localStorage.setItem("cobra_clients", JSON.stringify(clientsList));
  }, [clientsList]);

  function handleAddClient() {
    if (!name.trim() || !phone.trim()) {
      return;
    }

    const newClient = {
      id: Date.now().toString(),
      name,
      phone,
      status: "Ativo",
    };

    setClientsList((prev: Client[]) => [...prev, newClient]);
    setName("");
    setPhone("");
    setShowModal(false);
  }

  return (
    <div className="space-y-6">
      <PageHeader
  title="Clientes"
  description="Gerencie todos os clientes cadastrados."
/>

      <section className="bg-white border border-gray-200 rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">
            Lista de Clientes
          </h2>

          <PrimaryButton
            onClick={() => setShowModal(true)}
          >
            Novo Cliente
          </PrimaryButton>
        </div>

        <div className="mb-5 flex flex-col md:flex-row gap-4">
  <div className="flex-1">
    <TextInput
      label="Buscar cliente"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Digite o nome ou telefone..."
    />
  </div>

  <FilterSelect
    label="Status"
    value={filterStatus}
    onChange={(e) => setFilterStatus(e.target.value)}
  >
    <option>Todos</option>
    <option>Ativo</option>
    <option>Inativo</option>
  </FilterSelect>
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
      {filteredClients.map((client) => (
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
            <StatusBadge status={client.status} />
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
    title="Novo Cliente"
    onClose={() => setShowModal(false)}
  >
    <div className="space-y-5">
    <TextInput
  label="Nome"
  value={name}
  onChange={(e) => setName(e.target.value)}
  placeholder="Digite o nome"
/>

      <TextInput
  label="Telefone"
  value={phone}
  onChange={(e) => setPhone(e.target.value)}
  placeholder="(92) 99999-9999"
/>

      <div className="flex justify-end gap-2 pt-2">
        <SecondaryButton
          onClick={() => setShowModal(false)}
        >
          Cancelar
        </SecondaryButton>

        <PrimaryButton
          onClick={handleAddClient}
        >
          Salvar
        </PrimaryButton>
      </div>
    </div>
  </Modal>
)}
      
    </div>
  );
}