"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  ClipboardList,
  Clock3,
  Sparkles,
  TrendingUp,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-orange-50">
      {/* Background Blur */}

      <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-orange-200/40 blur-3xl" />

      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-100/50 blur-3xl" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 py-24 lg:flex-row lg:py-28">
        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .55 }}
          className="flex-1"
        >
          {/* Badge */}

          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-medium text-orange-600 shadow-sm">
            <Sparkles size={16} />
            FREE AI Career Assessment
          </div>

          {/* Heading */}

          <h1 className="mt-7 text-4xl font-bold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
            Discover Whether
            <span className="block text-[#163A63]">
              Digital Marketing
            </span>
            Is the Right Career for You
          </h1>

          {/* Subtitle */}

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Answer <strong>14 carefully designed questions</strong> and
            instantly receive your personalized Career Fit Score,
            recommended specialization, and expert guidance.
          </p>

          {/* CTA */}

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/assessment">
              <motion.button
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: .98,
                }}
                className="flex items-center gap-2 rounded-2xl bg-orange-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-orange-600"
              >
                Start My Assessment

                <ArrowRight size={20} />
              </motion.button>
            </Link>
          </div>

          {/* Trust */}

          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              {
                icon: Clock3,
                title: "3 Minutes",
              },
              {
                icon: ClipboardList,
                title: "14 Questions",
              },
              {
                icon: Brain,
                title: "AI Analysis",
              },
              {
                icon: TrendingUp,
                title: "Career Report",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: .15 + index * .08,
                }}
                className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <item.icon
                  size={20}
                  className="text-orange-500"
                />

                <p className="mt-3 text-sm font-semibold text-slate-800">
                  {item.title}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{
            opacity: 0,
            x: 40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: .6,
          }}
          className="w-full max-w-md"
        >
          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-2xl">
            {/* Header */}

            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-orange-500">
                  LIVE PREVIEW
                </p>

                <h3 className="mt-1 text-xl font-bold text-slate-800">
                  Question 4 of 14
                </h3>
              </div>

              <div className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-600">
                29%
              </div>
            </div>

            {/* Progress */}

            <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-200">
              <motion.div
                initial={{
                  width: 0,
                }}
                animate={{
                  width: "29%",
                }}
                transition={{
                  duration: 1,
                }}
                className="h-full rounded-full bg-orange-500"
              />
            </div>

            {/* Question */}

            <h4 className="mt-8 text-xl font-semibold leading-snug text-slate-900">
              How comfortable are you using a computer and the internet?
            </h4>

            {/* Options */}

            <div className="mt-6 space-y-3">
              {[
                "Expert",
                "Comfortable",
                "Average",
                "Beginner",
              ].map((option, index) => (
                <motion.div
                  key={option}
                  initial={{
                    opacity: 0,
                    y: 8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: .2 + index * .06,
                  }}
                  className={`flex items-center gap-4 rounded-xl border px-4 py-3 ${
                    option === "Comfortable"
                      ? "border-orange-500 bg-orange-50"
                      : "border-slate-200"
                  }`}
                >
                  <div
                    className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${
                      option === "Comfortable"
                        ? "border-orange-500 bg-orange-500"
                        : "border-slate-300"
                    }`}
                  >
                    {option === "Comfortable" && (
                      <div className="h-2 w-2 rounded-full bg-white" />
                    )}
                  </div>

                  <span className="font-medium text-slate-700">
                    {option}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 rounded-xl bg-slate-50 p-4 text-center text-sm text-slate-500">
              Your personalized report is generated instantly after completing
              all 14 questions.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}