import type { ChangeEventHandler } from "react";

type TextInputProps = {
  label: string;
  type?: string;
  value: string;
  placeholder?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export function TextInput({
  label,
  type = "text",
  value,
  placeholder,
  onChange,
}: TextInputProps) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">
        {label}
      </label>

      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full border border-gray-300 rounded-lg px-3 py-2"
      />
    </div>
  );
}