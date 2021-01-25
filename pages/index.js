import styled from 'styled-components'
import db from '../db.json';
import Widget from '../src/components/Widget/index';
import Footer from '../src/components/Footer/index';
import GitHubCorner from '../src/components/GitHubCorner/index';
import QuizBg from '../src/components/QuizBg/index';


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


export default function Home() {
  return (
    <QuizBg backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
              <h1>Teste</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Lorem Ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Quizes</h1>
            <p>Lorem Ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Footer/>
      </QuizContainer>
      <GitHubCorner projectUrl="www.google.com"/>
    </QuizBg>
  )
}
