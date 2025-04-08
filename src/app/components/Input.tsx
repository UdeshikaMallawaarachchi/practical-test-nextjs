type InputProps = {
    label: string;
    type: string;
    value: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
  
  export default function Input({ label, type, value, placeholder, onChange }: InputProps) {
    return (
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">{label}</label>
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
    );
  }
  