interface ProgressBarProps {
  progress: number;
}

export default function ProgressBar({
  progress,
}: ProgressBarProps) {
  return (
    <div className="mt-6">
      {/* Percentage */}
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-medium text-gray-600">
          Progress
        </span>

        <span className="text-sm font-semibold text-orange-500">
          {Math.round(progress)}%
        </span>
      </div>

      {/* Progress Track */}
      <div className="h-3 w-full overflow-hidden rounded-full bg-gray-200">
        <div
          className="h-full rounded-full bg-orange-500 transition-all duration-500 ease-in-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}