import { useState } from "react"
import type { questionType } from "../../types/question.type";
import style from "./question.module.css"


export default function Question({data,nextCallBack,index,size} :{ data : questionType,nextCallBack : CallableFunction,index : number,size : number}){
    
   
   const [revealAnswer,setRevealAnswer] = useState<boolean>(false);

   function clickEvent() : void{

      setRevealAnswer(false);
      nextCallBack();

   }


   return(
      <div className={style.questionContainer}>
         <h3>Question ({index + 1}/{size}): </h3>
         <span>{data.question}</span>
         
         <h3>Réponse : </h3>
         <span className={revealAnswer ? "" : style.hiddenAnswer}>{data.answer}</span>
         <div className={style.buttonsContainer}>
            <button onClick={() => setRevealAnswer(true)}> montrer la réponse</button>
            <button onClick={() => clickEvent()}>question suivante</button>
         </div>
         
      
      </div>
   )

}
