import React, {Component} from "react";

export default class Foot extends Component{
    handleAllDone = (event)=>{
        return this.props.updateAllToDos(event.target.checked)
    }

    handleDoneDelete = ()=>{
        return this.props.deleteDoneToDo()
    }

    render(){
        const {todos} = this.props
        const doneNum = todos.reduce((pre, todo)=>{return pre+(todo.done? 1:0)}, 0)
        return (
            <div className="todo-footer">
                <label>
                <input type="checkbox" onChange={this.handleAllDone} checked={doneNum===todos.length}/>
                </label>
                <span>
                <span>已完成{doneNum}</span> / 全部{todos.length}
                </span>
                <button className="btn btn-danger" onClick={this.handleDoneDelete}>清除已完成任务</button>
            </div>
        )
    }
}