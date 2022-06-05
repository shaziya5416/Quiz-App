//complete
import React, { Component } from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import Category from './Category';
import DifficultyLevel from './DifficultyLevel';
import Header from './Header';
import QuizHome from './QuizHome';

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {category:null , difficultyLevel:null};
    }
    handleAddCategory=(event,category)=>{
        console.log("clicked");
        this.setState({category:category});

    }
    handleDifficultyLevel=(event,difficultyLevel)=>{
        this.setState({difficultyLevel:difficultyLevel});
    }
    render() {
        return (
            <>
             <Header/>  
             <BrowserRouter>
             <Route path="/" exact>
             <Category
              category={this.state.category}
              handleAddCategory={this.handleAddCategory}
             />
             <DifficultyLevel 
             category={this.state.category}
             difficultyLevel={this.state.difficultyLevel}
             handleDifficultyLevel={this.handleDifficultyLevel}
             />
             </Route>
             <Route path="/quiz/:category/:difficultyLevel" component={QuizHome} />
             </BrowserRouter>
             
            </>
        );
    }
}

export default Dashboard;