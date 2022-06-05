//complete
import { NavLink } from "react-router-dom";
import React from 'react';

function DifficultyLevel(props) {
  return (
      <section className="level">
          <h2>Select Difficulty Level</h2>
          <div>
              <button onClick={(event)=>{props.handleDifficultyLevel(event,"easy")}} className={props.difficultyLevel?"easy":"inActive"} >
                Easy
              </button>
              <button onClick={(event)=>{props.handleDifficultyLevel(event,"medium")}} className={props.difficultyLevel?"medium":"inActive"} >
                Medium
              </button>
              <button onClick={(event)=>{props.handleDifficultyLevel(event,"hard")}} className={props.difficultyLevel?"hard":"inActive"} >
                Hard
              </button>
          </div>

          {props.category && props.difficultyLevel?
          (
              <div className="flex">
                 <NavLink to={`/quiz/${props.category.id}/${props.difficultyLevel}`}className="start-quiz-btn">
                  {" "}
                  Start Quiz
                  </NavLink>
              </div>
          ):("")
        }
      </section>
      // all three buttons of difficulty level
  )
}

export default DifficultyLevel;
