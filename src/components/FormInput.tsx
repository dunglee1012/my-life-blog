"use client";
import React from "react";

interface FormInputProps {
    label: string;
    name: string;
    value: string;
    error?: string;
    type?: string;
    placeholder?: string;
    inputClassName: string;
    options?: string[];
    onChange: (value: string) => void;
}

const FormInput: React.FC<FormInputProps> = ({
    label, name, value, error, type = "text", placeholder, inputClassName, options, onChange,
}) => {
    return (
        <div>
            <label htmlFor={name} className="block text-sm font-medium text-gray-900">
                {label}
            </label>
            <div className="mt-2">

                {type === "dropdown" ? (
                    <select
                        id={name}
                        name={name}
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        className={`block w-full rounded-md px-3 py-1.5 text-base text-gray-900 
                        bg-white outline-1 -outline-offset-1 outline-gray-300 
                        focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 ${inputClassName}`}
                    >
                        <option value="">Select</option>
                        {options?.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                        ))}
                    </select>
                ) : (
                    <input
                        id={name}
                        name={name}
                        type={type}
                        value={value}
                        placeholder={placeholder}
                        className={`block w-full rounded-md px-3 py-1.5 text-base text-gray-900 
                        outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 
                        focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 ${inputClassName}`}
                        onChange={(e) => onChange(e.target.value)}
                    />
                )}

                {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
            </div>
        </div>
    );
};

export default FormInput;
