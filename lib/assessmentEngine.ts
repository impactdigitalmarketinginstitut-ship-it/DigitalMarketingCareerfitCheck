import { questions } from "@/data/questions";

export interface AssessmentResult {
  totalScore: number;
  careerFit: string;

  profile: {
    currentProfile: string;
    learningStyle: string;
    personality: string;
    commitment: string;
  };

  strengths: string[];

  recommendedCareers: string[];

  challenges: string;

  readiness: string;
}

export function calculateAssessment(
  answers: Record<number, string>
): AssessmentResult {
  let earnedScore = 0;
  const maximumScore = questions.length * 10;

  // Calculate total score
  for (const question of questions) {
    const selectedOptionId = answers[question.id];

    const selectedOption = question.options.find(
      (option) => option.id === selectedOptionId
    );

    if (selectedOption) {
      earnedScore += selectedOption.score;
    }
  }

  const totalScore = Math.round((earnedScore / maximumScore) * 100);

  // Career Fit
  let careerFit = "";

  if (totalScore >= 85) {
    careerFit = "Excellent Career Fit";
  } else if (totalScore >= 70) {
    careerFit = "Strong Career Fit";
  } else if (totalScore >= 55) {
    careerFit = "Good Potential – Needs Guidance";
  } else if (totalScore >= 40) {
    careerFit = "Moderate Fit – Counseling Recommended";
  } else {
    careerFit = "Not Currently Recommended";
  }

  // Helper function
  const getOptionText = (questionId: number) => {
    const question = questions.find((q) => q.id === questionId);

    return (
      question?.options.find((o) => o.id === answers[questionId])?.text || ""
    );
  };

  // User Profile
  const currentProfile = getOptionText(10);

  const learningStyle = getOptionText(6);

  const personality = getOptionText(8);

  const commitment = getOptionText(13);

  const challenges = getOptionText(12);

  const readiness = getOptionText(14);

  // Recommended Careers
  const interest = getOptionText(5);

  let recommendedCareers: string[] = [];

  switch (interest) {
    case "Analyzing Data":
      recommendedCareers = [
        "SEO Specialist",
        "Performance Marketing",
        "Web Analytics Specialist",
      ];
      break;

    case "Creating Social Media Content":
      recommendedCareers = [
        "Social Media Manager",
        "Content Strategist",
        "Influencer Marketing",
      ];
      break;

    case "Writing Blogs & Articles":
      recommendedCareers = [
        "Content Writer",
        "SEO Content Writer",
        "Copywriter",
      ];
      break;

    case "Running Ads":
      recommendedCareers = [
        "Google Ads Specialist",
        "Meta Ads Specialist",
        "Performance Marketer",
      ];
      break;

    case "Designing Creatives":
      recommendedCareers = [
        "Creative Designer",
        "Brand Designer",
        "Social Media Designer",
      ];
      break;

    case "Talking to Customers":
      recommendedCareers = [
        "Business Development Executive",
        "Sales Funnel Specialist",
        "Client Success Manager",
      ];
      break;

    default:
      recommendedCareers = ["Digital Marketing Professional"];
  }

  // Strengths
  const strengths: string[] = [];

  if (totalScore >= 85) {
    strengths.push("Highly motivated to build a digital marketing career");
  }

  if (["a", "b"].includes(answers[3])) {
    strengths.push("Can dedicate sufficient learning time");
  }

  if (["a", "b"].includes(answers[4])) {
    strengths.push("Comfortable with technology");
  }

  if (["a", "b"].includes(answers[7])) {
    strengths.push("Strong communication skills");
  }

  if (["a", "b"].includes(answers[13])) {
    strengths.push("Highly committed to achieving career goals");
  }

  // Ensure at least 3 strengths
  if (strengths.length < 3) {
    strengths.push("Willing to learn new skills");
  }

  if (strengths.length < 3) {
    strengths.push("Shows interest in career growth");
  }

  return {
    totalScore,

    careerFit,

    profile: {
      currentProfile,
      learningStyle,
      personality,
      commitment,
    },

    strengths,

    recommendedCareers,

    challenges,

    readiness,
  };
}