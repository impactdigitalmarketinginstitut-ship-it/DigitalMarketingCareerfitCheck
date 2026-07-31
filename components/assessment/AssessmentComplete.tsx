"use client";

import { useEffect } from "react";

interface AssessmentCompleteProps {
  onComplete: () => void;
}

export default function AssessmentComplete({
  onComplete,
}: AssessmentCompleteProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-2xl items-center justify-center">
      <div className="w-full rounded-3xl bg-white p-10 text-center shadow-xl">

        {/* Success Icon */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
          <span className="text-4xl">✅</span>
        </div>

        <h2 className="text-3xl font-bold text-[#163A63]">
          Assessment Complete
        </h2>

        <p className="mt-4 text-lg text-gray-600">
          Thank you for completing your Digital Marketing Career Fit Assessment.
        </p>

        <p className="mt-2 text-gray-500">
          Preparing your personalized report...
        </p>
      </div>
    </div>
  );
}