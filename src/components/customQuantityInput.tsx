// components/ui/CustomQuantityInput.tsx
import React from 'react';

interface CustomQuantityInputProps {
  value: number;
  onChange: (value: number) => void;
  placeholder?: string;
  className?: string;
}

const CustomQuantityInput: React.FC<CustomQuantityInputProps> = ({
  value,
  onChange,
  placeholder = "Enter Quantity",
  className = "",
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (!isNaN(value)) {
      onChange(value); // Ensure that only valid numbers are passed to the parent
    }
  };

  return (
    <div className={`relative ${className}`}>
      <input
        type="number"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default CustomQuantityInput;
