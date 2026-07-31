"use client";

import { useState } from "react";

import LeadForm from "./LeadForm";
import QuestionCard from "./QuestionCard";
import ReportPreview from "./ReportPreview";
import { calculateAssessment,AssessmentResult } from "@/lib/assessmentEngine";
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
  fullName: string;
  whatsapp: string;
}

export default function AssessmentForm() {
  const [step, setStep] = useState<AssessmentStep>("lead");

  const [lead, setLead] = useState<LeadData>({
    fullName: "",
    whatsapp: "",
  });
  const [result, setResult] = useState<AssessmentResult | null>(null);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [answers, setAnswers] = useState<Record<number, string>>({});

  function handleLeadContinue(data: LeadData) {
    // Save lead details
    setLead(data);

    // Later we'll send to CRM here

    // Move to Assessment
    setStep("questions");
  }

function handleAnswer(optionId: string) {
  setAnswers((prev) => ({
    ...prev,
    [questions[currentQuestion].id]: optionId,
  }));
  setTimeout(() => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      const assessmentResult = calculateAssessment({
        ...answers,
        [questions[currentQuestion].id]: optionId,
      });

      setResult(assessmentResult);
      setStep("complete");
    }
  }, 250);
}

function handleNext() {
  if (currentQuestion < questions.length - 1) {
    setCurrentQuestion((prev) => prev + 1);
    return;
  }

  const assessmentResult = calculateAssessment(answers);

  setResult(assessmentResult);

  setStep("complete");
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
  return <ReportPreview result={result} />;
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