import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

function Input({
  value,
  onChange,
  name,
  label,
  icon,
  ...props
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
  label: string;
  icon?: string;
  [key: string]: any;
}) {
  return (
    <div className="p-4 w-full relative group border-[1.8px] transition-all border-zinc-300 dark:border-zinc-700 focus-within:!border-blue-500 flex items-center gap-2 mt-6 rounded-md">
      <label
        htmlFor={name}
        className={`absolute pointer-events-none px-2 tracking-wide transition-all bg-white dark:bg-zinc-900 text-zinc-400 dark:text-zinc-500 left-3.5 ${
          value
            ? "text-sm group-focus-within:text-blue-500 font-medium top-0 -mt-3"
            : "group-focus-within:text-sm group-focus-within:text-blue-500 group-focus-within:font-medium  group-focus-within:top-0 top-6 -mt-2 group-focus-within:-mt-3"
        }`}
      >
        {label}
      </label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        {...props}
        className="w-full pl-1.5 focus:placeholder-zinc-400 dark:focus:placeholder-zinc-600 bg-transparent placeholder-transparent focus:outline-none tracking-wide"
      />
      {icon && (
        <Icon
          icon={icon}
          className="text-zinc-400 dark:text-zinc-600 group-focus-within:text-blue-500 size-6"
        />
      )}
    </div>
  );
}

export default Input;
