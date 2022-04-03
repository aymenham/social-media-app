import React, { Component } from "react";
import "./chatList.css"
export default class Avatar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div  className="avatar">
        <div style={{cursor :"pointer"}} onClick={()=>{

this.props.setSelectedUSer(this.props.userData)
}} className="avatar-img">
          <img src={this.props.image} alt="#" />
        </div>
        
      </div>
    );
  }
}
