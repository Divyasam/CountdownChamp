import React, { Component } from 'react';
import {Form, FormControl, Button} from 'react-bootstrap';
import Clock from './Clock';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			deadline: 'December 25, 2018',
			newDeadline: ''
		}
		this.changeDeadline2 = this.changeDeadline2.bind(this);
	}	

	render() {
		return (
			<div className="App">
			  <div className="App-title">Countdown to {this.state.deadline}</div>
			  <Clock 
			   deadline={this.state.deadline}
			  />
			  <Form inline>
			     <FormControl className="Deadline-input" onChange={event => this.changeDeadline2(event)} placeholder='new date'/>
			     <Button onClick={() => this.changeDeadline()}>Submit</Button>
			  </Form>
			</div>

			)
	}

	changeDeadline() {
		this.setState({
			deadline: this.state.newDeadline
		})
	}

	changeDeadline2(event) {
		this.setState({
			newDeadline: event.target.value
		})
	}

}

export default App;
	


	