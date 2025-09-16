
export const calculateScore = (userAnswers, answerKey, gradingScheme) => {
  let correctCount = 0;
  Object.keys(userAnswers).forEach(questionId) {
    if (userAnswers[questionId] === answerKey[questionId]) {
      correctCount++;
    }
  }
  // Apply grading scheme (e.g., percentage, weighted questions, etc.)
  return (correctCount / Object.keys(answerKey).length) * 100;
};