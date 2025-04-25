import React, {Component} from "react";
import Item from '../Item'

export default class List extends Component{
    render(){
        const {todos, updateToDo, deleteToDo} = this.props
        return (
            <ul className="todo-main">
                {
                    todos.map((todo)=>{
                        return <Item key={todo.id} updateToDo={updateToDo} deleteToDo={deleteToDo} {...todo} />
                    })
                }
            </ul>
        )
    }
}


