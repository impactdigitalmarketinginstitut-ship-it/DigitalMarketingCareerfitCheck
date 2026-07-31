import {
  Briefcase,
  TrendingUp,
  Map,
  BadgeCheck,
} from "lucide-react";

const benefits = [
  {
    icon: Briefcase,
    title: "Career Suitability",
    description:
      "Know if Digital Marketing matches your personality and career goals.",
  },
  {
    icon: TrendingUp,
    title: "Career Opportunities",
    description:
      "Explore the roles and opportunities best suited to your interests.",
  },
  {
    icon: Map,
    title: "Personalized Roadmap",
    description:
      "Receive a step-by-step roadmap to start your digital marketing career.",
  },
  {
    icon: BadgeCheck,
    title: "Career Match Score",
    description:
      "Get your personalized career fit score with expert recommendations.",
  },
];

export default function AssessmentBenefits() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            What You'll Get
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#163A63]">
            Your Personalized Career Report Includes
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
            Our assessment doesn't just give you a score. It helps you understand
            your strengths, interests, and the best digital marketing career path
            for you.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {benefits.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-200 bg-white p-8 transition hover:-translate-y-2 hover:border-orange-300 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-100">
                  <Icon
                    size={28}
                    className="text-orange-500"
                  />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-[#163A63]">
                  {item.title}
                </h3>

                <p className="leading-7 text-gray-600">
                  {item.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}