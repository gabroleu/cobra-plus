import type {
  ChangeEventHandler,
  ReactNode,
} from "react";

type SelectInputProps = {
  label: string;
  value: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
  children: ReactNode;
};

export function SelectInput({
  label,
  value,
  onChange,
  children,
}: SelectInputProps) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">
        {label}
      </label>

      <select
        value={value}
        onChange={onChange}
        className="w-full border border-gray-300 rounded-lg px-3 py-2"
      >
        {children}
      </select>
    </div>
  );
}