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

    updateToDo = (id, done)=>{
        const {todos} = this.state
        const newToDos = todos.map((todo)=>{
            if (todo.id === id) return {...todo, done:done}
            else return todo
        })
        this.setState({todos:newToDos})
    }

    deleteToDo = (id) =>{
        const {todos} = this.state
        const newTodos = todos.filter(
            (todo)=>{
                return todo.id !== id
            }
        )
        this.setState({todos:newTodos})
    }

    updateAllToDos = (flag)=>{
        const {todos} = this.state
        const newToDos = todos.map((todo)=>{
            return {...todo, done:flag}
        })
        this.setState({todos:newToDos})
    }

    deleteDoneToDo = () =>{
        const {todos} = this.state
        const newTodos = todos.filter(
            (todo)=>{
                return !todo.done
            }
        )
        this.setState({todos:newTodos})
    }
    render(){
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addToDo = {this.addToDo}/>
                    <List todos={this.state.todos} updateToDo={this.updateToDo} deleteToDo={this.deleteToDo} />
                    <Foot todos={this.state.todos} updateAllToDos={this.updateAllToDos} deleteDoneToDo={this.deleteDoneToDo}/>
                </div>
            </div>
        )
    }
}