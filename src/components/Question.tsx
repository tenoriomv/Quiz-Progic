import { useState } from "react";
import classNames from "classnames";

type Props = {
  title: string;
  options: { name: string; value: string }[];
  buttonLabel: string;
  onConfirm: (value: string) => void
  questionNumber: number
};

const Question = ({ title, options, buttonLabel, onConfirm, questionNumber }: Props) => {
  const [currentValue, setCurrentValue] = useState<string|null>(null);

  return (
    <div className="container">
      <div className="quiz-content">
        <span className="number-opt">{questionNumber} {"->"}</span>
        <h2>{title}</h2>
        <div className="list-op">
          {options.map((item) => (
            <button onClick={() => setCurrentValue(item.value)} className={classNames("opt",{"opt-active":item.value == currentValue})}>

              <span className="label">{item.value}</span>
              <span className="name-numb">{item.name}</span>
            </button>
          ))}
        </div>
        <div className="action">
          <button onClick={() => {
            if (currentValue) {
              onConfirm(currentValue)
            }
          }}>{buttonLabel}</button>
        </div>
      </div>
    </div>
  );
};

export default Question;
