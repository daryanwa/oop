import React, {useState} from 'react';
import { data } from '../models/Data';
import styles from './Card.module.css';
import { CalculateTrueFalse, Quiz } from '../models/Quiz';
import ResultComponent from './ResultComponent';





function FormComponent() {
    let quizNumOne = new Quiz(data);
    let [question, setQuestion] = useState(0)
    let [correctAns, setCorrectAns] = useState(-1)
    let [clickedAns, setClickedAns] = useState(-1)
    let [calculateTrueCorrect, setCalculateTrueCorrect] = useState(0)
    let [calculateFalseCorrect, setCalculateFalseCorrect] = useState(0)
    let [showRes, setShowRes] = useState(false)


    const currentQuestion = quizNumOne.quizzes[question]
    let calculateCorrect = new CalculateTrueFalse(data)
    let calculatePercentage = calculateCorrect.calculatePercentage(calculateTrueCorrect, data.length)

    function reset (){
      setQuestion(0)
      setCalculateTrueCorrect(0)
      setCalculateFalseCorrect(0)
      setCalculateTrueCorrect(0)
      setCalculateFalseCorrect(0)
      setShowRes(false)
    }

    const handleClick = (answer: any, index: any) => {

      if(answer.flag === true){
        setCorrectAns(index)
        setCalculateTrueCorrect(calculateTrueCorrect + 1)
      }

      setClickedAns(index)
      setCalculateFalseCorrect(calculateFalseCorrect + 1)
      
      setTimeout( () => {
        setQuestion(question + 1)
        setCorrectAns(-1)
        setClickedAns(-1)
      }
        ,1000)
    } 

    return (
        <div>
          {
              question < data.length && !showRes ? 
            <div className={styles.wrapCard}>
            <div>{currentQuestion.id} / {data.length}</div>
            <div className={styles.hCard}  >{currentQuestion.quizName}</div>
            <div className={styles.ulCard}  >
              {currentQuestion.quizAnswers.map((q, index) =>(
                <div 
                className={`${styles.liCard} ${
                  index === correctAns
                      ? styles.trueAns
                      : index === clickedAns && !q.flag
                      ? styles.falseAns
                      : ''
              }`} 
                key={index}
                onClick={() => handleClick(q, index)}
                >
                 <div> {q.quizAns1} </div>
                 <div>  {q.quizAns2}</div>
                 <div> {q.quizAns3}</div>
                 <div> {q.quizAns4}</div>
                </div>
              )              
              )}
            
            </div>
          </div> :  
          <div>
              <ResultComponent calculateTrue={calculateTrueCorrect} calculatePercentage={calculatePercentage} reset={reset}  />
          </div>
          }
        </div>
    );
}

export default FormComponent;
