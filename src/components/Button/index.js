import styled from 'styled-components';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
let correctAnswer = 0;


const ButtonName = styled.button`
    text-align: center;
    color: white;
    width: 100%;
    height: 40px;
    padding: 10px;
    display:block;
    font-size: 16px;
    font-weight: 400;
    border-radius: ${({theme}) =>  theme.borderRadius};
    background-color:  ${({theme}) =>  theme.colors.primary};
    border: 1px solid ${({theme}) =>  theme.colors.primary};
    cursor: pointer;
  
`

export default function Button({setQuestionNumber,questionNumber, questionTotal,selectedAnswer,answer}){
    

    function handleSubmit(event){
        event.preventDefault();
        setQuestionNumber(questionNumber+1);

        if(selectedAnswer === answer){
            correctAnswer = correctAnswer+1;
            console.log(correctAnswer);
        }
        
        if(questionNumber === questionTotal){
            setQuestionNumber(questionNumber);
            if(correctAnswer === questionTotal){
                toast.dark(`Você é demais acertou todas as ${questionTotal} questões :D`, {
                    position: 'top-center',
                });
            }
            if(correctAnswer === 0){
                toast.dark(`Burrão, não acertou nenhuma questão!!!`, {
                    position: 'top-center',
                });
            }
            if(correctAnswer > 0 && correctAnswer < questionTotal){
                toast.dark(`Você acertou ${correctAnswer}, continue tentando.`, {
                    position: 'top-center',
                });
            }

            
           
        }
    }
    return(
            <ButtonName onClick={handleSubmit} >
                Confirmar
            </ButtonName>    
    );
}