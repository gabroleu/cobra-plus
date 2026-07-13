import type { SelectHTMLAttributes } from "react";

type FilterSelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
};

export function FilterSelect({
  label,
  className = "",
  children,
  ...props
}: FilterSelectProps) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">
        {label}
      </label>

      <select
        {...props}
        className={`w-full md:w-56 border border-gray-300 rounded-lg px-3 py-2 bg-white ${className}`}
      >
        {children}
      </select>
    </div>
  );
}