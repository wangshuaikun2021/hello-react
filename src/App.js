import React, {Component} from 'react'
import Header from './components/Header'
import List from './components/List'
import Foot from './components/Foot'
import './App.css'

export default class App extends Component{
    state = {
        todos: [
            {id:"001", task:"吃饭", done:false},
            {id:"002", task:"睡觉", done:false},
            {id:"003", task:"打豆豆", done:true},
        ]
    }

    addToDo = (todoObj)=>{
        const {todos} = this.state
        const newTodos = [todoObj, ...todos]
        this.setState({todos:newTodos})
    }
    render(){
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addToDo = {this.addToDo}/>
                    <List todos={this.state.todos}/>
                    <Foot/>
                </div>
            </div>
        )
    }
}