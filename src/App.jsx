import './App.sass';
import { Nav } from './Nav';
import { Main } from "./main";
import { Component } from 'react';

class App extends Component
{
  constructor()
  {
    super();
    this.state = {activePage: "start"};
    this.changeNav = this.changeNav.bind(this);
  }

  changeNav = (changeSite) => {
    this.setState({
        activePage: changeSite
    });
}

  render() {
    return (
      <div className="App">
        <Nav activeNav={this.state.activePage} changeSite={this.changeNav}/>
        <Main activePage={this.state.activePage}/>
      </div>
    );
  }
}


export default App;
