 export const ButtonAction = ({ title, className, onClick }) => {
  return (
    <button
      className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center 
              hover:bg-gray-100 transition-colors duration-200"
      onClick={onClick}
    >
      {title}
    </button>
  );
};
