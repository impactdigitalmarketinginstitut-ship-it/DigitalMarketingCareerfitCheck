"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain,
  CheckCircle2,
  LoaderCircle,
} from "lucide-react";

interface AnalyzingScreenProps {
  onComplete: () => void;
}

const steps = [
  "Understanding your career goals",
  "Measuring your commitment",
  "Analyzing your learning style",
  "Matching suitable career paths",
  "Preparing your personalized report",
];

export default function AnalyzingScreen({
  onComplete,
}: AnalyzingScreenProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [completed, setCompleted] = useState(false);

  /* Smooth Progress */

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }

        return prev + 1;
      });
    }, 90);

    return () => clearInterval(timer);
  }, []);

  /* Step Animation */

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < steps.length - 1) {
          return prev + 1;
        }

        clearInterval(timer);

        setCompleted(true);

        setTimeout(() => {
          onComplete();
        }, 900);

        return prev;
      });
    }, 1800);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-orange-50 px-5">

      {/* Background */}

      <div className="absolute -left-32 -top-24 h-72 w-72 rounded-full bg-orange-200 opacity-40 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-200 opacity-40 blur-[140px]" />

      {/* Card */}

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-white/60 bg-white/80 p-10 shadow-2xl backdrop-blur-xl"
      >
        {/* Brain */}

        <motion.div
          animate={{
            rotate: [0, -8, 8, -8, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
          }}
          className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-orange-100"
        >
          <Brain
            size={42}
            className="text-orange-500"
          />
        </motion.div>

        <h1 className="text-center text-3xl font-bold text-slate-900">
          AI Career Assessment Engine
        </h1>

        <p className="mt-3 text-center text-slate-500">
          Please wait while we analyze your responses and
          generate your personalized career report.
        </p>

        {/* Progress */}

        <div className="mt-8">

          <div className="mb-2 flex justify-between text-sm">

            <span className="font-medium text-slate-500">
              Analysis Progress
            </span>

            <span className="font-semibold text-orange-500">
              {progress}%
            </span>

          </div>

          <div className="h-3 overflow-hidden rounded-full bg-slate-200">

            <motion.div
              animate={{
                width: `${progress}%`,
              }}
              transition={{
                ease: "linear",
              }}
              className="h-full rounded-full bg-gradient-to-r from-orange-400 to-orange-500"
            />

          </div>

        </div>

        {/* Dynamic Status */}

        <AnimatePresence mode="wait">

          <motion.p
            key={currentStep}
            initial={{
              opacity: 0,
              y: 8,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -8,
            }}
            className="mt-6 text-center text-sm font-medium text-orange-600"
          >
            {steps[currentStep]}
          </motion.p>

        </AnimatePresence>

        {/* Steps */}

        <div className="mt-8 space-y-4">
                      {steps.map((step, index) => {
            const isCompleted = index < currentStep;
            const isCurrent = index === currentStep;

            return (
              <motion.div
                key={step}
                initial={{
                  opacity: 0,
                  x: -10,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: index * 0.08,
                }}
                className={`flex items-center gap-4 rounded-xl border px-4 py-3 transition-all duration-300

                ${
                  isCurrent
                    ? "border-orange-200 bg-orange-50"
                    : isCompleted
                    ? "border-green-100 bg-green-50"
                    : "border-slate-200 bg-white"
                }`}
              >
                {/* Status Icon */}

                <div className="flex h-10 w-10 items-center justify-center rounded-full">

                  {isCompleted ? (
                    <motion.div
                      initial={{
                        scale: 0,
                      }}
                      animate={{
                        scale: 1,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 450,
                      }}
                    >
                      <CheckCircle2
                        size={24}
                        className="text-green-500"
                      />
                    </motion.div>
                  ) : isCurrent ? (
                    <LoaderCircle
                      size={22}
                      className="animate-spin text-orange-500"
                    />
                  ) : (
                    <div className="h-3 w-3 rounded-full bg-slate-300" />
                  )}

                </div>

                <div className="flex-1">

                  <p
                    className={`font-medium transition-colors

                    ${
                      isCompleted
                        ? "text-green-700"
                        : isCurrent
                        ? "text-orange-700"
                        : "text-slate-500"
                    }`}
                  >
                    {step}
                  </p>

                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Bottom Status */}

        <AnimatePresence>

          {completed && (
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-5 text-center"
            >
              <CheckCircle2
                size={34}
                className="mx-auto mb-3 text-green-500"
              />

              <h3 className="text-lg font-bold text-green-700">
                Analysis Complete
              </h3>

              <p className="mt-1 text-sm text-green-600">
                Your personalized Digital Marketing Career
                Report is ready.
              </p>
            </motion.div>
          )}

        </AnimatePresence>

      </motion.div>

    </div>
  );
}