import styled from 'styled-components';
import React from 'react';
import db from '../../../db.json';
import Answers from '../Answers/index';



export default function AnswersContent({questionNumber,setQuestionNumber,questionTotal}){
    const baseUrl = db.questions[questionNumber - 1];
 

    return(
        <>
            <img src = {baseUrl.image} style={{width:'100%', height:'200px', borderRadius:'4px'}}/>
            <h2>{baseUrl.title}</h2>
            <p>{baseUrl.description}</p>
            <Answers alternatives = {baseUrl.alternatives} questionNumber= {questionNumber} setQuestionNumber ={setQuestionNumber} questionTotal= {questionTotal} answer = {baseUrl.answer}/>
        </>
    )
}

