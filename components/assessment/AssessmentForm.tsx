"use client";

import { useState } from "react";

import LeadForm from "./LeadForm";
import QuestionCard from "./QuestionCard";
import ReportPreview from "./ReportPreview";
import { calculateAssessment, AssessmentResult } from "@/lib/assessmentEngine";
import { questions } from "@/data/questions";
import AssessmentComplete from "./AssessmentComplete";
import AnalyzingScreen from "./AnalyzingScreen";

type AssessmentStep =
  | "lead"
  | "questions"
  | "complete"
  | "analyzing"
  | "report";

interface LeadData {
  leadId: string;
  fullName: string;
  whatsapp: string;
}

export default function AssessmentForm() {
  const [step, setStep] = useState<AssessmentStep>("lead");

  const [lead, setLead] = useState<LeadData>({
    leadId: "",
    fullName: "",
    whatsapp: "",
  });
  const [result, setResult] = useState<AssessmentResult | null>(null);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [answers, setAnswers] = useState<Record<number, string>>({});

  function handleLeadContinue(data: LeadData) {
    setLead(data);
    setStep("questions");
  }
  async function saveAssessmentToCRM(
    assessmentResult: AssessmentResult,
    finalAnswers: Record<number, string>
  ) {
    try {
      const questionAnswers = questions
        .map((question) => {
          const selectedId = finalAnswers[question.id];

          const selectedOption = question.options.find(
            (option) => option.id === selectedId
          );

          return `Q: ${question.question}
A: ${selectedOption?.text ?? "Not Answered"}
`;
        })
        .join("\n");

      await fetch(
        `${process.env.NEXT_PUBLIC_CRM_URL}/api/website-assessment/${lead.leadId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.NEXT_PUBLIC_CRM_API_KEY!,
          },
          body: JSON.stringify({
            assessment: {
              score: assessmentResult.totalScore,
              careerFit: assessmentResult.careerFit,
              strengths: assessmentResult.strengths,
              recommendedCareers:
                assessmentResult.recommendedCareers,
              questionAnswers,
            },
          }),
        }
      );
    } catch (err) {
      console.error("CRM Save Failed", err);
    }
  }

  async function handleAnswer(optionId: string) {
    setAnswers((prev) => ({
      ...prev,
      [questions[currentQuestion].id]: optionId,
    }));
    setTimeout(async () => {
  if (currentQuestion < questions.length - 1) {
    setCurrentQuestion((prev) => prev + 1);
  } else {
    const finalAnswers = {
      ...answers,
      [questions[currentQuestion].id]: optionId,
    };

    const assessmentResult =
      calculateAssessment(finalAnswers);

    await saveAssessmentToCRM(
      assessmentResult,
      finalAnswers
    );

    setResult(assessmentResult);

    setStep("complete");
  }
}, 250);
  }

  function handlePrevious() {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  }

  if (step === "lead") {
    return (
      <LeadForm
        onContinue={handleLeadContinue}
      />
    );
  }
  if (step === "complete") {
    return (
      <AssessmentComplete
        onComplete={() => setStep("analyzing")}
      />
    );
  }
  if (step === "analyzing") {
    return (
      <AnalyzingScreen
        onComplete={() => setStep("report")}
      />
    );
  }
  if (step === "report" && result) {
    return (
      <ReportPreview
        result={result}
        lead={lead}
      />
    );
  }

  return (
    <QuestionCard
      question={questions[currentQuestion]}
      currentQuestion={currentQuestion + 1}
      totalQuestions={questions.length}
      selectedOption={
        answers[questions[currentQuestion].id]
      }
      onSelect={handleAnswer}
      onPrevious={handlePrevious}
    />
  );
}