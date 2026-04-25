type Props = {
  title: string;
  value: string;
  description?: string;
  variant?: "default" | "alert";
};

export function MetricCard({
  title,
  value,
  description,
  variant = "default",
}: Props) {
  const isAlert = variant === "alert";

  return (
    <div
      className={`border rounded-xl p-4 shadow-sm ${
        isAlert
          ? "bg-orange-50 border-orange-300"
          : "bg-white border-gray-200"
      }`}
    >
      <span className="text-sm text-gray-500">{title}</span>

      <h2
        className={`text-2xl font-bold ${
          isAlert ? "text-orange-600" : "text-primary"
        }`}
      >
        {value}
      </h2>

      {description && (
        <p className="text-xs text-gray-400 mt-1">{description}</p>
      )}
    </div>
  );
}