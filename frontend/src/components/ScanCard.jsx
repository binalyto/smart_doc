export default function ScanCard({
  title,
  description,
  onClick,
  disabled = false,
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`h-44 w-full rounded-xl border bg-white p-6 text-left
        flex flex-col justify-between transition
        ${
          disabled
            ? "opacity-50 cursor-not-allowed"
            : "hover:shadow-md hover:border-blue-500"
        }`}
    >
      <div>
        <h3 className="text-lg font-medium text-slate-700">
          {title}
        </h3>
        <p className="mt-2 text-sm text-gray-600">
          {description}
        </p>
      </div>

      {!disabled && (
        <span className="text-sm font-medium text-blue-600">
          Start Scan →
        </span>
      )}
    </button>
  );
}
