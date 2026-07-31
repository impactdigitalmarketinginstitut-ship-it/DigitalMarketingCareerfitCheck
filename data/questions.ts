import { Question } from "./types/question";

export const questions: Question[] = [
  {
    id: 1,
    category: "Career Goals",
    question: "Why do you want to learn Digital Marketing?",
    options: [
      { id: "a", text: "Get a high-paying job", score: 10 },
      { id: "b", text: "Switch my career", score: 9 },
      { id: "c", text: "Start freelancing", score: 8 },
      { id: "d", text: "Grow my business", score: 8 },
      { id: "e", text: "Learn a new skill", score: 7 },
      { id: "f", text: "Just exploring", score: 3 },
    ],
  },

  {
    id: 2,
    // Q2
    category: "Learning Commitment",
    question: "When do you want to start learning?",
    options: [
      { id: "a", text: "Immediately", score: 10 },
      { id: "b", text: "Within 1 month", score: 8 },
      { id: "c", text: "Within 3 months", score: 6 },
      { id: "d", text: "Within 6 months", score: 4 },
      { id: "e", text: "Just exploring", score: 2 },
    ],
  },
  {
    id: 3,
    // Q3
    category: "Time Availability",
    question: "How many hours can you dedicate every week?",
    options: [
      { id: "a", text: "More than 20 hours", score: 10 },
      { id: "b", text: "15–20 hours", score: 9 },
      { id: "c", text: "10–15 hours", score: 8 },
      { id: "d", text: "5–10 hours", score: 6 },
      { id: "e", text: "Less than 5 hours", score: 2 },
    ],
  },
  {
    id: 4,
    // Q4
    category: "Technical Skills",
    question: "How comfortable are you using a computer and the internet?",
    options: [
      { id: "a", text: "Expert", score: 10 },
      { id: "b", text: "Comfortable", score: 8 },
      { id: "c", text: "Average", score: 6 },
      { id: "d", text: "Beginner", score: 4 },
      { id: "e", text: "Very New", score: 2 },
    ],
  },
  {
    id: 5,
    category: "Interests",
    question: "Which activity do you enjoy the most?",
    options: [
      { id: "a", text: "Analyzing Data", score: 10 },
      { id: "b", text: "Creating Social Media Content", score: 9 },
      { id: "c", text: "Writing Blogs & Articles", score: 8 },
      { id: "d", text: "Running Ads", score: 6 },
      { id: "e", text: "Designing Creatives", score: 4 },
      { id: "f", text: "Talking to Customers", score: 2 },
    ],
  },
  {
    id: 6,
    category: "Learning Style",
    question: "How do you prefer learning new skills?",
    options: [
      { id: "a", text: "practice by doing", score: 10 },
      { id: "b", text: "Live classes", score: 9 },
      { id: "c", text: "Watching videos", score: 8 },
      { id: "d", text: "Reading articles/books", score: 7 },
      { id: "e", text: "One-to-One mentoring", score: 8 },
    ],
  },
  {
    id: 7,
    category: "Communication",
    question: "How confident are you while communicating with others?",
    options: [
      { id: "a", text: "Very confident", score: 10 },
      { id: "b", text: "Confident", score: 8 },
      { id: "c", text: "Average", score: 6 },
      { id: "d", text: "Slightly nervous", score: 4 },
      { id: "e", text: "Very shy", score: 2 },
    ],
  },
  {
    id: 8,
    category: "Personality",
    question: "Which best describes your Personality?",
    options: [
      { id: "a", text: "Problem Solver", score: 10 },
      { id: "b", text: "Creative", score: 8 },
      { id: "c", text: "Analytical", score: 6 },
      { id: "d", text: "Helpful", score: 4 },
      { id: "e", text: "Organized", score: 2 },
    ],
  },
  {
    id: 9,
    category: "Learning Experience",
    question: "Have you completed any online course before?",
    options: [
      { id: "a", text: "Many", score: 10 },
      { id: "b", text: "A few", score: 8 },
      { id: "c", text: "One", score: 6 },
      { id: "d", text: "Never", score: 3 },
    ],
  },
  {
    id: 10,
    category: "Current Profile",
    question: "What best describes you?",
    options: [
      { id: "a", text: "Student", score: 10 },
      { id: "b", text: "Job Seeker", score: 8 },
      { id: "c", text: "Working Professional", score: 6 },
      { id: "d", text: "Business Owner", score: 3 },
      { id: "e", text: "Freelancer", score: 3 },
    ],
  },
  {
    id: 11,
    category: "Career Expectations",
    question: "What monthly income do you want within the next 2 years?",
    options: [
      { id: "a", text: "₹30K–₹50K", score: 10 },
      { id: "b", text: "₹50K–₹75K", score: 8 },
      { id: "c", text: "₹75K–₹1L", score: 6 },
      { id: "d", text: "₹1L–₹2L", score: 3 },
      { id: "e", text: "Above ₹2L", score: 3 },
    ],
  },
  {
    id: 12,
    category: "Challenges",
    question: "What is your biggest challenge today?",
    options: [
      { id: "a", text: "Lack of skills", score: 10 },
      { id: "b", text: "Lack of confidence", score: 8 },
      { id: "c", text: "Lack of guidance", score: 6 },
      { id: "d", text: "Lack of time", score: 4 },
      { id: "e", text: "Financial problems", score: 3 },
      { id: "f", text: "Don't know where to start", score: 2 },
    ],
  },
  {
    id: 13,
    category: "Commitment",
    question: "How committed are you to building a career in Digital Marketing?",
    options: [
      { id: "a", text: "100% committed", score: 10 },
      { id: "b", text: "Mostly committed", score: 8 },
      { id: "c", text: "Somewhat committed", score: 6 },
      { id: "d", text: "Not sure", score: 4 },
      { id: "e", text: "Just exploring", score: 3 },
    ],
  },
  {
    id: 14,
    category: "Course Readiness",
    question: "If selected, when are you ready to join the course?",
    options: [
      { id: "a", text: "Immediately", score: 10 },
      { id: "b", text: "Within 30 days", score: 8 },
      { id: "c", text: "Within 2-3 months", score: 6 },
      { id: "d", text: "Maybe later", score: 3 },
      { id: "e", text: "Just Exploring", score: 1 },
    ],
  },
];