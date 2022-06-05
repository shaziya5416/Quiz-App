//complete
import React, { Component } from 'react';
import {NavLink} from "react-router-dom";

class Results extends Component {
    constructor(props){
        super(props);
        this.state={
            result:null,
            score:null
        }
    }
    componentDidMount(){
        let questions=this.props.questions;
        let arrOfSelectedAnswer=this.props.arrOfSelectedAnswer;
        let score=0;
        
        let result=questions.map((question,i)=>{
            let obj={
                question:question.question,
                correctAnswer:question.correct_answer,
                yourAnswer:arrOfSelectedAnswer[i]
            };
            if(question.correct_answer===arrOfSelectedAnswer[i]){
            score=score+1;
            }
            return obj;
        }
        )
        this.setState({result:result, score:score})
    }
    render() {
        return (
            <section className="result">
        <h2>
          Your Score is : <span>{this.state.score}</span>
        </h2>

        {this.state.result ? (
          <table className="table">
            <thead>
              <tr>
                <th>Is Correct</th>
                <th>No.</th>
                <th>Question</th>
                <th>Correct Answer</th>
                <th>Your Answer</th>
              </tr>
            </thead>
            <tbody>
              {this.state.result.map((ele, i) => {
                return (
                  <tr key={i}>
                    <td className="text-center">
                      {ele.correct_answer === ele.yourAns ? (
                        <i className="fas fa-check-circle d-green"></i>
                      ) : (
                        <i className="fas fa-times-circle red"></i>
                      )}
                    </td>
                    <td className="text-center">{i + 1}</td>
                    <td className="text-center">{ele.question}</td>

                    <td className="text-center">{ele.correctAnswer}</td>
                    <td className="text-center">{ele.yourAnswer}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          ""
        )}

        <div className="flex">
          <NavLink to="/" className="go-home">
            Go To Home
          </NavLink>
        </div>
      </section>
        );
    }
}

export default Results;