import React, { useState } from "react";
import Question from "./Question";
import quiz from "../data/quiz";

function App() {
  const [questions, setQuestions] = useState(quiz);
  const [currentQuestionId, setCurrentQuestion] = useState(1);
  const currentQuestion = questions.find((q) => q.id === currentQuestionId);

  function handleQuestionAnswered() {
    if (currentQuestionId < questions.length) {
      setCurrentQuestion(currentQuestionId + 1);
    } else {
      setCurrentQuestion(null);
    }
  }

  return (
    <main>
      <section>
        {currentQuestion ? (
          <Question
            question={currentQuestion}
            onAnswered={handleQuestionAnswered}
          />
        ) : (
          <h1>Game Over</h1>
        )}
      </section>
    </main>
  );
}

export default App;
