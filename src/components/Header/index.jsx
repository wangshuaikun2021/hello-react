import React, {Component} from "react";
import { nanoid } from "nanoid";

export default class Header extends Component{
    handleKeyUp = (event)=>{
        if (event.keyCode !== 13) return
        // console.log(event.target.value)
        if (event.target.value === ""){
            alert("输入不能为空！！！")
            return
        }
        this.props.addToDo({
            id:nanoid(),
            task:event.target.value, 
            done:false
        })
        event.target.value = ""
    }
    render(){

        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
        )
    }
}
