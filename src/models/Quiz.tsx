
import { data } from "./Data";


interface QuizItem {
    quizName: string;
    id: number;
    quizAnswers: {
        quizAns1?: string;
        quizAns2?: string;
        quizAns3?: string;
        quizAns4?: string;
        flag: boolean;
    }[];
}

export class Quiz {
    quizzes: QuizItem[];

    constructor(quizzes: QuizItem[]) {
        this.quizzes = data; 
    }

    getQuizName():string[]{
        return this.quizzes.map(quiz => quiz.quizName)
    }

    getQuizId(): number[]{
        return this.quizzes.map(quiz => quiz.id)
    }

 
    getQuizAns(): any[] {
        
        return this.quizzes.filter(qisa => qisa.id).map(quiz =>
            quiz.quizAnswers
            
            .map(qiz =>{
               
                
                return    Object.values(qiz)
                .map(val => (typeof val === 'string' ? val : null))
                .filter(qiz => typeof qiz === 'string').filter(val => val !== undefined)
                
            }
            )
        );
    }
}


export class CalculateTrueFalse extends Quiz {

    constructor(quizzes: QuizItem[]){
        super(quizzes)
    }
    calculateCorrectAnswers(clickedAns: number, correctAns: number): number{
        return clickedAns === correctAns ? correctAns : 0
    }
    calculateIncorrectAnswers(clickedAns: number, correctAns: number): number{
        return clickedAns !== correctAns ? 1 : 0
    }
    calculatePercentage(correctAns: number, total: number){
        return (correctAns / total) * 100
    }

}


