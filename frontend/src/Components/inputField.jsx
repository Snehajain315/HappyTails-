export default function InputField({
  id,
  name,
  type = Text,
  label,
  value,
  placeholder,
  onChange,
  onBlur,
  error,
  touched,
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {" "}
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`w-full px-4 py-3 rounded-lg border ${
          touched && error ? "border-red-500" : "border-gray-300"
        } focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-300 placeholder-gray-400`}
      />
      {touched && error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
