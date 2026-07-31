"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
    Brain,
    Sparkles,
    Trophy,
    CheckCircle2,
    ArrowRight,
    TrendingUp,
} from "lucide-react";
import { useRouter } from "next/navigation";

import { AssessmentResult } from "@/lib/assessmentEngine";

interface ReportPreviewProps {
    result: AssessmentResult;
}

export default function ReportPreview({
    result,
}: ReportPreviewProps) {
    
const router = useRouter();
    const [displayScore, setDisplayScore] = useState(0);

    useEffect(() => {
        let current = 0;

        const interval = setInterval(() => {
            current++;

            if (current >= result.totalScore) {
                current = result.totalScore;
                clearInterval(interval);
            }

            setDisplayScore(current);
        }, 18);

        return () => clearInterval(interval);
    }, [result.totalScore]);

    const metrics = [
        {
            title: "Career Readiness",
            value: Math.min(result.totalScore + 8, 100),
        },
        {
            title: "Learning Ability",
            value: Math.min(result.totalScore + 3, 100),
        },
        {
            title: "Commitment",
            value: Math.min(result.totalScore + 5, 100),
        },
        {
            title: "Communication",
            value: Math.max(result.totalScore - 10, 55),
        },
    ];

    return (
        <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-orange-50 py-14">

            {/* Background Glow */}

            <div className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-orange-200 opacity-40 blur-[120px]" />

            <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-200 opacity-40 blur-[140px]" />

            <div className="relative mx-auto max-w-6xl px-5">

                {/* Header */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 25,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    className="text-center"
                >

                    <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">

                        <Sparkles size={16} />

                        AI Generated Report

                    </div>

                    <h1 className="mt-5 text-4xl font-bold text-slate-900">

                        Your Digital Marketing Career Fit Report

                    </h1>

                    <p className="mx-auto mt-4 max-w-2xl text-slate-500">

                        Based on your answers, our assessment engine analyzed
                        your interests, commitment, learning style and career
                        readiness.

                    </p>

                </motion.div>

                {/* Score Card */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 30,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    className="mt-12 rounded-3xl border border-white/70 bg-white/90 p-8 shadow-2xl backdrop-blur-xl"
                >

                    <div className="grid items-center gap-10 lg:grid-cols-[300px_1fr]">

                        {/* Left */}

                        <div className="flex flex-col items-center">

                            <motion.div
                                initial={{
                                    rotate: -180,
                                    opacity: 0,
                                }}
                                animate={{
                                    rotate: 0,
                                    opacity: 1,
                                }}
                                transition={{
                                    duration: 0.8,
                                }}
                                className="flex h-52 w-52 items-center justify-center rounded-full border-[12px] border-orange-500 bg-orange-50 shadow-inner"
                            >

                                <div className="text-center">

                                    <p className="text-6xl font-bold text-orange-500">

                                        {displayScore}

                                    </p>

                                    <p className="mt-1 text-sm text-slate-500">

                                        /100

                                    </p>

                                </div>

                            </motion.div>

                            <div className="mt-6 text-center">

                                <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">

                                    <Trophy size={16} />

                                    {result.careerFit}

                                </div>

                            </div>

                        </div>

                        {/* Right */}

                        <div>

                            <div className="flex items-center gap-3">

                                <Brain
                                    size={28}
                                    className="text-orange-500"
                                />

                                <h2 className="text-2xl font-bold text-slate-900">

                                    AI Career Insights

                                </h2>

                            </div>

                            <p className="mt-4 text-slate-600 leading-7">

                                Our assessment indicates that your overall profile
                                aligns well with a career in Digital Marketing.
                                Your strongest areas suggest excellent long-term
                                growth potential with the right learning roadmap.

                            </p>

                            <div className="mt-8 space-y-5">

                                {metrics.map((metric) => (
                                    <div key={metric.title}>

                                        <div className="mb-2 flex justify-between text-sm">

                                            <span className="font-medium text-slate-600">

                                                {metric.title}

                                            </span>

                                            <span className="font-semibold text-orange-500">

                                                {metric.value}%

                                            </span>

                                        </div>

                                        <div className="h-3 overflow-hidden rounded-full bg-slate-200">

                                            <motion.div
                                                initial={{
                                                    width: 0,
                                                }}
                                                whileInView={{
                                                    width: `${metric.value}%`,
                                                }}
                                                viewport={{
                                                    once: true,
                                                }}
                                                transition={{
                                                    duration: 1,
                                                }}
                                                className="h-full rounded-full bg-gradient-to-r from-orange-400 to-orange-500"
                                            />

                                        </div>

                                    </div>
                                ))}

                            </div>

                        </div>

                    </div>

                </motion.div>
                {/* Top Strengths */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 25,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    className="mt-8 grid gap-6 lg:grid-cols-2"
                >

                    {/* Strengths */}

                    <div className="rounded-3xl border border-white/70 bg-white/90 p-7 shadow-xl backdrop-blur-xl">

                        <div className="flex items-center gap-3">

                            <CheckCircle2
                                className="text-green-500"
                                size={24}
                            />

                            <h3 className="text-2xl font-bold text-slate-900">
                                Your Top Strengths
                            </h3>

                        </div>

                        <div className="mt-6 space-y-4">

                            {result.strengths.map((strength, index) => (

                                <motion.div
                                    key={strength}
                                    initial={{
                                        opacity: 0,
                                        x: -20,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        x: 0,
                                    }}
                                    transition={{
                                        delay: index * 0.15,
                                    }}
                                    viewport={{
                                        once: true,
                                    }}
                                    className="flex items-center gap-4 rounded-2xl border border-green-100 bg-green-50 p-4"
                                >

                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-500 text-white">

                                        <CheckCircle2 size={20} />

                                    </div>

                                    <div>

                                        <p className="font-semibold text-slate-900">
                                            {strength}
                                        </p>

                                        <p className="text-sm text-slate-500">
                                            Identified from your assessment responses
                                        </p>

                                    </div>

                                </motion.div>

                            ))}

                        </div>

                    </div>

                    {/* Career Cards */}

                    {/* <div className="rounded-3xl border border-white/70 bg-white/90 p-7 shadow-xl backdrop-blur-xl">

            <div className="flex items-center gap-3">

              <TrendingUp
                className="text-orange-500"
                size={24}
              />

              <h3 className="text-2xl font-bold text-slate-900">

                Recommended Career Paths

              </h3>

            </div>

            <div className="mt-6 grid gap-4">

              {result.recommendedCareers.map((career, index) => (

                <motion.div
                  key={career}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.15,
                  }}
                  viewport={{
                    once: true,
                  }}
                  whileHover={{
                    y: -3,
                  }}
                  className="rounded-2xl border border-orange-100 bg-orange-50 p-5"
                >

                  <div className="flex items-center justify-between">

                    <div>

                      <h4 className="font-semibold text-slate-900">

                        {career}

                      </h4>

                      <p className="mt-1 text-sm text-slate-500">

                        High growth opportunity

                      </p>

                    </div>

                    <div className="rounded-xl bg-orange-500 px-3 py-2 text-sm font-semibold text-white">

                      Match

                    </div>

                  </div>

                </motion.div>

              ))}

            </div>

          </div> */}

                </motion.div>

                {/* Premium Report Preview */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 30,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    className="mt-10 overflow-hidden rounded-3xl border border-orange-200 bg-white shadow-2xl"
                >

                    <div className="border-b bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-6 text-white">

                        <h2 className="text-3xl font-bold">

                            Your Complete AI Career Blueprint

                        </h2>

                        <p className="mt-2 text-orange-100">

                            Your personalized report has been prepared.

                        </p>

                    </div>

                    <div className="grid gap-5 p-8 md:grid-cols-2">

                        {[
                            "Career Personality Analysis",
                            "Skill Gap Report",
                            "Learning Roadmap",
                            "90-Day Action Plan",
                            "Salary Growth Forecast",
                            "Industry Opportunities",
                        ].map((item, index) => (
                            <motion.button
                                key={index}
                                whileHover={{
                                    y: -4,
                                    scale: 1.02,
                                }}
                                whileTap={{
                                    scale: 0.98,
                                }}
                                onClick={() => router.push("/book-free-consultation")}
                                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition-all hover:border-orange-300 hover:shadow-xl"
                            >
                                {/* Blur Overlay */}
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-white/40 to-white/70 backdrop-blur-[2px]" />

                                <div className="relative z-10 flex items-center justify-between">
                                    <div>
                                        <p className="font-semibold text-slate-800">
                                            🔒 {item}
                                        </p>

                                        <p className="mt-1 text-sm text-slate-500">
                                            Unlock this section by booking your FREE consultation.
                                        </p>
                                    </div>

                                    <div className="rounded-full bg-orange-100 p-3 transition group-hover:bg-orange-500">
                                        <ArrowRight
                                            size={18}
                                            className="text-orange-500 group-hover:text-white"
                                        />
                                    </div>
                                </div>
                            </motion.button>
                        ))}

                    </div>

                    {/* CTA */}

                    <div className="border-t bg-slate-50 px-8 py-10 text-center">

                        <h3 className="text-3xl font-bold text-slate-900">

                            Unlock Your Complete Career Blueprint

                        </h3>

                        <p className="mx-auto mt-4 max-w-2xl text-slate-600">

                            Book a FREE one-on-one career counseling session with
                            our expert mentors and receive your complete AI report,
                            personalized learning roadmap and career strategy.

                        </p>

                        <motion.button
                            whileHover={{
                                scale: 1.03,
                            }}
                            whileTap={{
                                scale: 0.97,
                            }}
                            className="mt-8 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 px-10 py-4 text-lg font-semibold text-white shadow-xl"
                        >

                            Book My FREE Career Counseling →

                        </motion.button>

                        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">

                            <span>✓ 100% Free Session</span>

                            <span>✓ Personalized Guidance</span>

                            <span>✓ No Obligation</span>

                        </div>

                    </div>

                </motion.div>

            </div>

        </div>

    );
}