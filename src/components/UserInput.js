import React, { Component } from 'react';

class UserInput extends Component {
	constructor(){
		super()
		this.state = {
			username: "",
			hometown: ""
		}
	}

	handleUsernameChange = (event) => {
		this.setState({
			username: event.target.value
		})
	}

	handleHometownChange = (event) => {
		this.setState({
			hometown: event.target.value
		})
	}

    handleSubmit = () => {
    	this.props.store.dispatch({type: 'ADD_USER', user: {username: this.state.username, hometown: this.state.hometown}})
    }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
        <input type="text" id="username" onChange={this.handleUsernameChange}/>
        <input type="text" id="hometown" onChange={this.handleHometownChange}/>
        <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default UserInput;
