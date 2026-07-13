import type { ButtonHTMLAttributes, ReactNode } from "react";

type SecondaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export function SecondaryButton({
  children,
  className = "",
  ...props
}: SecondaryButtonProps) {
  return (
    <button
      {...props}
      className={`px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition ${className}`}
    >
      {children}
    </button>
  );
}