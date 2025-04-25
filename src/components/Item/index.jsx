import React, {Component} from "react";

export default class Item extends Component{
    state = {mouse:false}
    handleMouse = (flag)=>{
        return ()=>{
            this.setState({mouse:flag})
        }
    }

    handleDone = (id)=>{
        return (event)=>{
            this.props.updateToDo(id, event.target.checked)
        }
    }

    handleDelete = (id)=>{
        return ()=>{
            if (window.confirm("sure?")) this.props.deleteToDo(id)
        }
    }
    render(){
        const {id, task, done} = this.props
        const {mouse} = this.state
        return (
            <li style={{backgroundColor: mouse ? '#ddd':'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
            <label>
                <input type="checkbox" onChange={this.handleDone(id)} checked={done}/>
                <span>{task}</span>
            </label>
            <button className="btn btn-danger" style={{display: mouse ? 'block':'none'}} onClick={this.handleDelete(id)}>删除</button>
            </li>
        )
    }
}

