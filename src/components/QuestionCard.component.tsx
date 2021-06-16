import React from 'react';
import { AnswerObject } from '../App';
type Props = {
  questions: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNum: number;
  totalQuestion: number;
};

const QuestionCard: React.FC<Props> = ({
  questions,
  answers,
  callback,
  userAnswer,
  questionNum,
  totalQuestion,
}) => (
  <div>
    <p className="number">
      Question: {questionNum} / {totalQuestion}
    </p>
    <p dangerouslySetInnerHTML={{ __html: questions }} />
    <div>
      {answers.map((answer, id) => (
        <div key={id}>
          <button
            disabled={userAnswer ? true : false}
            value={answer}
            onClick={callback}
          >
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default QuestionCard;
