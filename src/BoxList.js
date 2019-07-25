import React, { Component } from "react";
import './BoxList.css';
import Box from './Box';
import NewBoxForm from './NewBoxForm'
import uuid from 'uuid/v4';



class BoxList extends Component {
	constructor(props){
		super(props);
		this.state = { boxes : [] };
		this.addBox = this.addBox.bind(this);
		this.remove = this.remove.bind(this)
	}
	//remove a box by its id
	remove(id) {
    this.setState(state => ({
    boxes: state.boxes.filter(b => b.id !== id)}))
  }

	renderBoxes() {
    return (
      <div>
        {this.state.boxes.map(box => (
					< Box bgColor={box.bgColor} 
						height={box.boxHeight} 
						width={box.boxWidth} 
						key={box.uuid}
						id={box.id}
						remove={this.remove}/>
        ))}
      </div>
    );
  }


	addBox(box) {
		let newBox = { ...box, id: uuid() };
		this.setState(state => ({
			boxes: [...state.boxes, newBox]
		})
		);

	}
	render(){
		return (
			<div className="BoxList">
				<NewBoxForm addBox={this.addBox}/>
				{this.renderBoxes()}
			</div>
		);
	}
}


export default BoxList;