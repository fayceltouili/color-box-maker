import React, {Component} from "react";
import "./Box.css";


/** Individual colored box. */

class Box extends Component {
	constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
	}
	//hande remove box
	handleRemove(evt) {
		let id = evt.target.id;
    this.props.remove(id);
  }
  render() {
		 const {bgColor, height, width, id } = this.props;
    return (
        <div 
          style={{backgroundColor: bgColor, width: `${width}px`, height: `${height}px`}} >
					
						<button id={id}
						 onClick={this.handleRemove}>
						 X </button>
				</div>

			
    );
  }
}


export default Box;
