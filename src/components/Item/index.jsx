import React, {Component} from "react";

export default class Item extends Component{
    state = {mouse:false}
    handleMouse = (flag)=>{
        return ()=>{
            this.setState({mouse:flag})
        }
    }
    render(){
        const {id, task, done} = this.props
        const {mouse} = this.state
        return (
            <li style={{backgroundColor: mouse ? '#ddd':'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
            <label>
                <input type="checkbox" defaultChecked={done} />
                <span>{task}</span>
            </label>
            <button className="btn btn-danger" style={{display: mouse ? 'block':'none'}}>删除</button>
            </li>
        )
    }
}

