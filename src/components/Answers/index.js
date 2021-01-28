import styled from 'styled-components';
import React, { useState } from 'react';
import Button from '../Button/index';


const LabelAnswers = styled.button`
    text-align:left;
    color: white;
    margin-bottom: 7px;
    width: 100%;
    height: 50px;
    padding: 5px;
    display:block;
    font-size: 16px;
    font-weight: 400;
    border-radius: ${({theme}) =>  theme.borderRadius};
    background-color:  ${({theme}) =>  theme.colors.primary};
    border: 1px solid ${({theme}) =>  theme.colors.primary};
    cursor:pointer;
    border: ${({selected}) => selected ? '2px solid #000' : 'none' };
    *:first-child{
        margin-top: 50px;
    }
    *:last-child{
        margin-bottom: 0px;
    }
   
`

export default function Answers({alternatives,questionNumber,setQuestionNumber,questionTotal,answer}){
    const [changeButtonColor, setChangeButtonColor] = useState(false);
    const [selectedAnswer, setselectedAnswer] = useState();

    function changeColor(event,index){
        event.preventDefault();
        setChangeButtonColor(!changeButtonColor);
        setselectedAnswer(index);
    }
    return(
        <>
            {alternatives.map((alternative,index) => <LabelAnswers id={index} onClick={() => {changeColor(event,index)}} select={changeButtonColor === true}> {alternative}</LabelAnswers>)}

            <Button questionNumber= {questionNumber} setQuestionNumber ={setQuestionNumber} questionTotal= {questionTotal} selectedAnswer = {selectedAnswer} answer={answer}/>
 
        </>   
    )
}