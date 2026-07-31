"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Clock3,
} from "lucide-react";

import ProgressBar from "./ProgressBar";
import { Question } from "@/data/types/question";

interface QuestionCardProps {
  question: Question;
  currentQuestion: number;
  totalQuestions: number;
  selectedOption?: string;

  onSelect: (optionId: string) => void;
  onPrevious: () => void;
}

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.15,
    },
  },
};

const optionVariants = {
  hidden: {
    opacity: 0,
    y: 6,
    filter: "blur(3px)",
  },

  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",

    transition: {
      duration: 0.22,
      ease: "easeOut",
    },
  },
};

export default function QuestionCard({
  question,
  currentQuestion,
  totalQuestions,
  selectedOption,
  onSelect,
  onPrevious,
}: QuestionCardProps) {

  const progress =
    (currentQuestion / totalQuestions) * 100;

  const remainingQuestions =
    totalQuestions - currentQuestion;

  const remainingMinutes = Math.max(
    1,
    Math.ceil((remainingQuestions * 20) / 60)
  );

  // Keyboard Shortcuts
  useEffect(() => {

    function handleKeyDown(
      e: KeyboardEvent
    ) {

      const index = Number(e.key);

      if (
        index >= 1 &&
        index <= question.options.length
      ) {
        onSelect(
          question.options[index - 1].id
        );
      }

      if (e.key === "ArrowLeft") {
        onPrevious();
      }

    }

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );

  }, [question, onSelect, onPrevious]);

  return (

    <div className="flex min-h-screen overflow-hidden items-center justify-center bg-gradient-to-br from-slate-50 via-white to-orange-50 px-4 py-4">

      <motion.div

        key={question.id}

        initial={{
          opacity: 0,
          x: 30,
        }}

        animate={{
          opacity: 1,
          x: 0,
        }}

        transition={{
          duration: .30,
        }}

        className="w-full max-w-3xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl"

      >

        {/* Header */}

        <div className="border-b border-slate-200 bg-white px-6 py-4">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-500">

                {question.category}

              </p>

              <h2 className="mt-1 text-lg font-semibold text-slate-800">

                Question {currentQuestion} / {totalQuestions}

              </h2>

            </div>

            <div className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-600">

              {Math.round(progress)}%

            </div>

          </div>

          <div className="mt-3">

            <ProgressBar progress={progress} />

          </div>

        </div>

        {/* Body */}

        <div className="px-6 py-5">

          <motion.div

            key={question.id}

            initial={{
              opacity: 0,
              y: 8,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              delay: .05,
            }}

          >

            <div className="flex items-center gap-2 text-sm text-orange-500">

              <Clock3 size={15} />

              <span>

                About {remainingMinutes} minute
                {remainingMinutes > 1
                  ? "s"
                  : ""}
                {" "}remaining

              </span>

            </div>

            <h1 className="mt-3 text-2xl font-bold leading-snug text-slate-900 lg:text-[30px]">

              {question.question}

            </h1>

            <p className="mt-2 text-sm text-slate-500">

              Choose the option that best describes you.

            </p>

          </motion.div>

          <motion.div

            variants={containerVariants}

            initial="hidden"

            animate="show"

            className="mt-6 grid gap-3"

          >
            {question.options.map((option) => {
              const active = selectedOption === option.id;

              return (
                <motion.button
                  key={option.id}
                  variants={optionVariants}
                  whileHover={{
                    y: -1,
                  }}
                  whileTap={{
                    scale: 0.99,
                  }}
                  transition={{
                    duration: 0.18,
                    ease: "easeOut",
                  }}
                  onClick={() => onSelect(option.id)}
                  className={`group relative flex w-full items-center gap-4 overflow-hidden rounded-xl border px-5 py-3.5 text-left transition-all duration-200

      ${active
                      ? "border-orange-500 bg-orange-50 shadow-[0_8px_24px_rgba(249,115,22,0.12)]"
                      : "border-slate-200 bg-white hover:border-orange-200 hover:shadow-md"
                    }`}
                >
                  {/* Left Accent */}

                  <motion.div
                    animate={{
                      opacity: active ? 1 : 0,
                      scaleY: active ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className="absolute left-0 top-0 h-full w-1 origin-center rounded-r-full bg-orange-500"
                  />

                  {/* Radio */}

                  <div
                    className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-all

        ${active
                        ? "border-orange-500 bg-orange-500"
                        : "border-slate-300"
                      }`}
                  >
                    <motion.div
                      animate={{
                        scale: active ? 1 : 0,
                        opacity: active ? 1 : 0,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 450,
                        damping: 24,
                      }}
                      className="h-2 w-2 rounded-full bg-white"
                    />
                  </div>

                  {/* Text */}

                  <span
                    className={`text-[15px] transition-colors

        ${active
                        ? "font-semibold text-slate-900"
                        : "font-medium text-slate-700"
                      }`}
                  >
                    {option.text}
                  </span>
                </motion.button>
              );
            })}
            </motion.div>
            </div>
           <div className="flex items-center justify-between border-t border-slate-200 bg-slate-50 px-6 py-3">
          <motion.button
            whileHover={{ x: -2 }}
            whileTap={{ scale: 0.96 }}
            onClick={onPrevious}
            disabled={currentQuestion === 1}
            className="flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-orange-500 disabled:pointer-events-none disabled:opacity-40"
          >
            <ArrowLeft size={17} />
            Previous
          </motion.button>

          <div className="text-xs text-slate-400">
            Press <kbd className="rounded border bg-white px-1 py-0.5">1–6</kbd>
          </div>
        </div>

      </motion.div>
    </div>       
  );
}