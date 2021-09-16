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
      To_Do: "<tr class='important'><td>1</td><td>Learn React</td><td>31.1.2021</td><td>Just You</td><td><button>start Program</button></td></tr>"
    };
    this.changeNav = this.changeNav.bind(this);
    this.addToDo = this.addToDo.bind(this);
  }

  changeNav = (changeSite) => {
    this.setState({
        activePage: changeSite,
        To_Do: this.state.To_Do
    });
}

  addToDo = (todo) => {

    let newToDo
    const fillItem = () => {
      if(this.state.To_Do)
      {
        newToDo = this.state.To_Do;
      }
      else if(!this.state.To_Do)
      {
        newToDo = "";
      }

      if(todo)
      {
        newToDo += `<tr class=${todo.importance === 1 ? 'important' : todo.importance === 2 ? 'less_important' : 'unimportant'}>
        <td>1</td>`;
      }
      newToDo += `<td>${todo.what}</td>`
      if(todo.when)
      {
        newToDo += `<td>${todo.when}</td>`
      }
      else if(!todo.when)
      {
        const date = new Date();
        newToDo += `<td>${date.toLocaleDateString()} ${date.getHours() + 1}:${date.getMinutes() < 10 ? "0"+date.getMinutes() : date.getMinutes()}</td>`
      }
      if(todo.participent)
      {
        newToDo += `<td>You, ${todo.participent}</td>`
      }
      else if(!todo.participent)
      {
        newToDo += `<td>Just you</td>`
      }
      if(todo.program)
      {
        newToDo += `<td><button>start Program</button></td>`
      }
      else if(!todo.program)
      {
        newToDo += `<td></td>`
      }
      newToDo += `</tr>`;
    }
    fillItem();

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