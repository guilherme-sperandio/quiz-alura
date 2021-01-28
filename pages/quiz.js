import styled from 'styled-components';
import React, { useState } from 'react';
import db from '../db.json';
import Widget from '../src/components/Widget/index';
import Footer from '../src/components/Footer/index';
import GitHubCorner from '../src/components/GitHubCorner/index';
import QuizBg from '../src/components/QuizBg/index';
import AnswersContent from '../src/components/AnswersContent/index';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px){
    margin: auto;
    padding: 15px;
  }
`;


export default function QuizPage() {
 const [questionNumber, setQuestionNumber] = useState(1);
 const questionTotal= db.questions.length;
  return (
    <QuizBg backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
              <h1><a href="google.com">a</a>{`  Pergunta ${questionNumber} de ${questionTotal}`}</h1>
          </Widget.Header>
          <Widget.Content>
            <AnswersContent questionNumber= {questionNumber} setQuestionNumber ={setQuestionNumber} questionTotal= {questionTotal}/>
          </Widget.Content>
        </Widget>
        
        <Footer/>
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/guilherme-sperandio"/>
    </QuizBg>
  )
}
