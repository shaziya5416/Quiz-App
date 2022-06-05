//complete
import React, { Component } from 'react';
import SingleQuizQuestion from './SingleQuizQuestion';
import _ from "lodash";
import Results from './Results';

class QuizHome extends Component {
    constructor(props){
        super(props);
        this.state={
         questions:null,
         arrOfSelectedAnswer:[],
         isQuizSubmitted:false
        }
    }
    componentDidMount(){
        let category=this.props.match.params.category;
        let difficultyLevel=this.props.match.params.difficultyLevel;
        console.log(category,difficultyLevel);
        fetch(
            `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficultyLevel}`
          )
          .then((res) => res.json())
          .then((questions) => {
            this.setState({ questions: questions.results });
          });
    }

    handleArrayOfSelectedAnswers = (arrOfAnswer,currentQuestion)=>{
        if (!this.state.arrOfSelectedAnswer[currentQuestion]) {
            this.setState((prevState) => {
              let updatedAns = _.concat(prevState.arrOfSelectedAnswer, arrOfAnswer);
              return {
                arrOfSelectedAnswer: updatedAns,
              };
            });
          } else {
            this.setState((prevState) => {
              prevState.arrOfSelectedAnswer[currentQuestion] = arrOfAnswer;
              return {
                arrOfSelectedAnswer: prevState.arrOfSelectedAnswer,
              };
            });
          }
        }; 

    handleSubmit=()=>{
        if (!this.state.arrOfSelectedAnswer[9]) {
            alert("You must select answer of Current question.");
          } else {
            this.setState((prevState) => {
              return {
                isQuizSubmitted: !prevState.isQuizSubmitted,
              };
            });
          }
    }

    render() {
        return (
            <section className="mt-10">
                {this.state.question && !this.state.isQuizSubmitted
                ?(<SingleQuizQuestion
                    questions={this.state.questions}
                    arrOfSelectedAnswer={this.state.arrOfSelectedAnswer}
                    isQuizSubmitted={this.state.isQuizSubmitted}
                    handleArrayOfSelectedAnswers={this.handleArrayOfSelectedAnswers}
                    handleSubmit={this.handleSubmit}              
                />):
                ("")}
                {this.state.isQuizSubmitted?(
                < Results 
                  questions={this.state.questions}
                  arrOfSelectedAnswer={this.arrOfSelectedAnswer}
                />):("")}
            </section>
        );
    }
}


export default QuizHome;