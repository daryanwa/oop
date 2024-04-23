import React, {useState} from 'react';
import styles from './Card.module.css';



interface ResultComponentProps {
    calculateTrue: number
    calculatePercentage: number
    reset: () => void
}

const ResultComponent: React.FC<ResultComponentProps>  = ({calculateTrue, calculatePercentage, reset}) =>  {

  return (
    
    <>
        <div className={styles.wrapCard}>
            <div className={styles.resText} style={{padding:30}}>
             Поздравляю ты ответил на <span className={styles.spanText}>{calculateTrue} </span>  правильных вопроса
            </div>
            <div className={styles.resText} style={{padding: 30}}>
                Процент правильных ответов составил {calculatePercentage}%
            </div>
            <button className={styles.buttonRes} onClick={reset}>Пройти еще раз</button>
        </div>
    </>
  )
}

export default ResultComponent