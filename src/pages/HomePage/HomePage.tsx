import Question from "../../components/question/question"
import { useState } from "react"
import style from "./Homepage.module.css"
import datas from "../../assets/questions.json" with {type : 'json'}



export default function HomePage(){

    const [currentQuestionIndex,setCurrentQuestionIndex] = useState<number>(0);

    function nextIndex() : void{

        if(currentQuestionIndex < (datas.length - 1)){
            setCurrentQuestionIndex((prev) => prev + 1);
        }
        else{
            setCurrentQuestionIndex(0);
        }
    }

    return (
        <section>
            <h2 className={style.Title}>Révision structure des ordinateurs</h2>
            
            <Question size={datas.length} index={currentQuestionIndex} data={datas[currentQuestionIndex]} nextCallBack={nextIndex}/>
        </section>
    )
}