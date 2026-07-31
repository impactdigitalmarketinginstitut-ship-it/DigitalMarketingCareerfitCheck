import {
  UserRound,
  ClipboardList,
  FileCheck,
} from "lucide-react";

const steps = [
  {
    icon: UserRound,
    title: "Tell Us About Yourself",
    description:
      "Enter a few basic details so we can personalize your assessment report.",
  },
  {
    icon: ClipboardList,
    title: "Answer 14 Smart Questions",
    description:
      "Complete our carefully designed assessment in about 3 minutes.",
  },
  {
    icon: FileCheck,
    title: "Get Your Career Report",
    description:
      "Instantly discover your career fit score, recommended specialization, and roadmap.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-[#163A63]">
            How It Works
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#163A63]">
            Complete Your Assessment in Just 3 Minutes
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
            We've made the process simple, quick, and personalized so you can
            make an informed career decision.
          </p>

        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-3">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="relative rounded-2xl bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Step Number */}

                <div className="absolute -top-5 left-8 flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 font-bold text-white">
                  {index + 1}
                </div>

                {/* Icon */}

                <div className="mb-6 mt-6 flex h-16 w-16 items-center justify-center rounded-xl bg-orange-100">
                  <Icon className="text-orange-500" size={30} />
                </div>

                <h3 className="mb-3 text-2xl font-semibold text-[#163A63]">
                  {step.title}
                </h3>

                <p className="leading-7 text-gray-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}