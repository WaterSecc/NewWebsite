type SnackbarProps = {
  message: string;
  onClose: () => void;
  variant?: "success" | "error";
};

const Snackbar = ({ message, onClose, variant = "success" }: SnackbarProps) => {
  const bgColor =
    variant === "success" ? "bg-green-600" : "bg-red-600";

  return (
    <div className={`fixed bottom-6 right-6 z-50 flex items-center ${bgColor} text-white px-4 py-3 rounded shadow-lg`}>
      <span className="text-sm">{message}</span>
      <button onClick={onClose} className="ml-4 text-white font-bold">
        ✖
      </button>
    </div>
  );
};

export default Snackbar;
