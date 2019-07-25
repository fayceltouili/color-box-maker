import React, { Component } from "react";
import './NewBoxForm.css';
import Box from './Box';


class NewBoxForm extends Component {
	constructor(props){
		super(props);
		this.state = {
			boxWidth: '',
			boxHeight: '',
			bgColor: '',
			id: ''
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		
	}

	handleSubmit(evt){
		evt.preventDefault();
		this.props.addBox(this.state);
    this.setState({ boxWidth: '', boxHeight: '', bgColor: '' });
	}
	handleChange(evt){
		this.setState({ [evt.target.name]: evt.target.value });

	}
	render(){
		return(
			<div>
			<form onSubmit={this.handleSubmit}>
				<label htmlFor='boxWidth'> Box Width: </label>
				<input name='boxWidth' value={this.state.boxWidth}
					onChange={this.handleChange}
				/>
				<br></br>
				<label htmlFor='boxHeight'> Box Height: </label>
				<input name='boxHeight' value={this.state.boxHeight}
					onChange={this.handleChange}
				/>
				<br></br>

				<label htmlFor='bgColor'> Background Color: </label>
				<input name='bgColor' value={this.state.bgColor}
					onChange={this.handleChange}
				/>
				<br></br>
			<button> Add!</button>
			</form>
			</div>
		);
	}
}


export default NewBoxForm;