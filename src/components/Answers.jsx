import { useRef } from "react";

export default function Answers({
  answers,
  selectedAnswer,
  answerState,
  onSelect,
}) {
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul className="my-8 space-y-4">
      {shuffledAnswers.current.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let bgColor = "bg-white hover:bg-cyan-200";

        if (answerState === "answered" && isSelected) {
          bgColor = "bg-orange-300";
        }

        if (answerState === "correct" && isSelected) {
          bgColor = "bg-green-600 text-white";
        }

        if (answerState === "wrong" && isSelected) {
          bgColor = "bg-rose-500 text-white";
        }

        return (
          <li key={answer}>
            <button
              className={`w-3/4 py-3 mx-auto block text-center text-black font-medium rounded-lg shadow-lg transition-colors duration-300 ease-in-out ${bgColor}`}
              onClick={() => onSelect(answer)}
              disabled={answerState !== ""}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
