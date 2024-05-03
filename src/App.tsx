import { useEffect, useState } from "react";
import "./App.css";
import Question from "./components/Question";
import Result from "./components/Result";
import data from "./mocks/data.json"


type IAnswers = {
  [key: string] : string| null
}

function App() {
  const [answers, setAnswer] = useState<IAnswers>({
    q1:null,
    q2:null
  });
  const [progress, setProgress] = useState(0)
  
  useEffect(() => {
    if (progress == 2) {
      const findAnswer = data.find(item => item.q1 == answers.q1 && item.q2 == answers.q2)
      if (findAnswer) {
        window.location.href = findAnswer.data
      }

    }
  },[progress])


  return (
    <>
      <div className="main-app">
        {progress==0 && <Question
          questionNumber= {1}
          title="Qual o tamanho da sua empresa?"
          options={[
            { name: "0 a 10", value: "A" },
            { name: "11 a 50", value: "B" },
            { name: "51 a 100", value: "C" },
            { name: "101 a 500", value: "D" },
          ]}
          buttonLabel="Próxima"
          onConfirm={(value) => {
            setAnswer(pv => {
              return {...pv, q1:value}
            })
            setProgress(1) 
          }} 
        />}

        {progress == 1 && <Question
        questionNumber= {2}
          title="Qual meio usa para comunicação interna?"
          options={[
            { name: "WhatsApp", value: "A" },
            { name: "E-mail", value: "B" },
            { name: "", value: "C" },
            { name: "A", value: "D" },
          ]}
          buttonLabel="Proxima"
          onConfirm={(value) => {
            setAnswer(pv => {
              return {...pv, q2:value}
            })
            setProgress(2) 
          }}
        />}


        {progress === 2 && <Result  /> } 
      </div>
    </>
  );
}

export default App;
