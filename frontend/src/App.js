import React, { Component } from "react";
import "./App.css";
import { connect, sendMsg } from "./api";
import Header from './components/Header/Header'
import ChatHistory from "./components/ChatHistory";
import ChatInput from "./components/ChatInput";
import RunInput from "./components/RunInput";
import Generate from "./components/Generate";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatHistory: []
    }
  }

  componentDidMount(){
    
  }

  send(event) {
    if (event.keyCode == 13){
      console.log("enter entered");
      event.target.value = "";
    }
  }

  request() {
    console.log("made it to the request")
    var host = window.location.protocol + "//" + window.location.host;
    console.log(host)
    fetch(`${host}/ws`)
    .then(response => response.json())
    .then(data => console.log(data));
    }

  render() {
    return (
      <div className="App">
        <Header/>
        <RunInput formInput={this.formState} />
        <Generate generate={this.generate}/>
        <div onClick={() => this.request()}>Click me</div>
      </div>
    );
  }
}



export default App;
