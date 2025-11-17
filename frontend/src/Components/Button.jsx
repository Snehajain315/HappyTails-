export default function Button({ type, title, disabled}) {
  return (
    <div>
      <button
        type={type}
        disabled={disabled}
        className="w-full py-3 px-4 bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition duration-300"
      >
        {title}
      </button>
    </div>
  );
}
