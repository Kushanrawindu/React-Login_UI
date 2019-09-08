import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {Login} from "./component/login/index";
import {Register} from "./component/login/register";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      isLoggingActive:true,
    }
  }

  changeState(){
    const {isLoggingActive} = this.state;
    //if(isLoggingActive)
  }

  render() {
    const { isLoggingActive } = this.state;
    const current = isLoggingActive ? "Register" : "Login";
    const currentActive = isLoggingActive ? "Login" : "Register";
    return(
        <div className="App">
          <div className="login">
            <div className="container">
              {isLoggingActive && <Login containerRef={(ref) => this.current=ref}/> }
              {!isLoggingActive && <Register containerRef={(ref) => this.current=ref}/>}
            </div>
            <RightSide current={current} containerRef={ref=>this.rightSide=ref} onClick={this.changeState.bind(this)}/>
          </div>
        </div>
    )
  }
}

const RightSide = props =>{
  return <div className="right-side" ref={props.containerRef} onClick={props.onclick}>
  <div className="inner-container">
    <div className="text">{props.current}</div>
  </div>
  </div>
}

export default App;
