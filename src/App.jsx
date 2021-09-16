import './App.sass';
import { Nav } from './Nav';
import { Main } from "./main";
import { Component } from 'react';

class App extends Component
{
  constructor()
  {
    super();
    this.state = {
      activePage: "start",
      To_Do: ""};
    this.changeNav = this.changeNav.bind(this);
    this.addToDo =this.addToDo.bind(this);
  }

  changeNav = (changeSite) => {
    this.setState({
        activePage: changeSite,
        To_Do: this.state.To_Do
    });
}

  addToDo = (todo) => {

    let newToDo = this.state.To_Do;

    if(todo)
    {
      
    }

    this.setState({
      activePage:this.state.activePage,
      To_Do: newToDo
    })
  }

  render() {
    return (
      <div className="App">
        <Nav activeNav={this.state.activePage} changeSite={this.changeNav}/>
        <Main activePage={this.state.activePage} todoList={this.state.To_Do} addToDo={this.addToDo}/>
      </div>
    );
  }
}


export default App;
