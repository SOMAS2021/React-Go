import React, { Component } from "react";
import "./Generate.scss";

class Generate extends Component{
    constructor(props) {
        super(props);
        this.state = {
          isGoing: true,
          numberOfGuests: 2
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }


    render(){
        return (
            <button className="GenerateButton">
                Generate
                <input
                    name="generate"
                    type="button"
                    checked={this.state.isGoing}
                    onChange={this.handleInputChange} />
            </button>
        )
    }
}

export default Generate;