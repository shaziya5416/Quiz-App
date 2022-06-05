//complete
import React, { Component } from 'react'
import _ from "lodash";
export default class SingleQuizQuestion extends Component {
    constructor(props){
        super(props);
        this.state={
            currentQuestion:0,
            options:null,
            correctAnswer:null
        }
    }
    componentDidMount(){
        let arrOfIncorrect=[
            ...this.props.questions[this.state.currentQuestion].incorrect_answers,
        ];
        let correctAnswer=this.props.questions[this.state.currentQuestion].correct_answer;
        let arrOfAllAnswers= _.unique(_.concat(arrOfIncorrect,correctAnswer));

        this.setState({
            options : arrOfAllAnswers,
            correctAnswer:correctAnswer        })
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.currentQuestion !== this.state.currentQuestion) {
            let arrOfIncorrect=[
                ...this.props.questions[this.state.currentQuestion].incorrect_answers,
            ];
            let correctAnswer=this.props.questions[this.state.currentQuestion].correct_answer;
            let arrOfAllAnswers= _.unique(_.concat(arrOfIncorrect,correctAnswer));
    
            this.setState({
                options : arrOfAllAnswers,
                correctAnswer:correctAnswer        })
        }
      }
      handleNextQuestion = () => {
        if (!this.props.arrOfSelectedAnswer[this.state.currentQuestion]) {
          alert("You must select answer of current question.");
        } else {
          this.setState((prevState) => {
            return {
              currentQuestion: prevState.currentQuestion + 1,
            };
          });
        }
      };
    

  render() {
    let questionToDisplay=this.props.questions[this.state.currentQuestion];
    return (
        <section className="quiz">
            <h2>
                Question No.
                <span>
                    {this.state.currentQuestion + 1}
                </span>
            </h2>
            <h2>
                Difficulty Level
                <span>
                    {questionToDisplay.difficulty}
                </span>
            </h2>
            <h3>
                Question
                <span>
                    {questionToDisplay.question}
                </span>
            </h3>
            {this.state.options ?(
                <>
                <ul className="ans">
                    {this.state.options.map((answer,i)=>{
                        return(
                            <li onclick={(event)=>{this.props.handleArrayOfSelectedAnswers(this.props.questions,this.state.currentQuestion)}} key={i} className={this.props.arrOfSelectedAnswer[this.state.currentQuestion]===answer ? "green":"purple"}>
                                {i+1} : {" "+ answer}
                            </li>
                        )

                    })}
                </ul>
                </>
            ):("")
        }
        {this.state.currentQuestion>8?
        (
            <div>
                <button className="next" onClick={(event)=>{this.props.handleSubmit(this.props.questions,this.props.arrOfSelectedAnswer)}}>
                 Submit
                </button>
            </div>
        ):(
            <div>
                <button className="next" onClick={(event)=>{this.handleNextQuestion()}}>
                    Next
                </button>
            </div>
        )
        }
        </section>
    )
  }
}
