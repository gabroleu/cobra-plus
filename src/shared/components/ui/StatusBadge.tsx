type StatusBadgeProps = {
  status: string;
};

export function StatusBadge({
  status,
}: StatusBadgeProps) {
  function getStatusClasses() {
    switch (status) {
      case "Ativo":
      case "Pago":
        return "bg-green-100 text-green-700";

      case "Pendente":
        return "bg-yellow-100 text-yellow-700";

      case "Atrasado":
      case "Inativo":
        return "bg-red-100 text-red-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  }

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusClasses()}`}
    >
      {status}
    </span>
  );
}