import React, {Component} from "react";
import Item from '../Item'

export default class Header extends Component{
    render(){
        return (
            <ul className="todo-main">
                <Item/>
                <Item/>
                <Item/>
                <Item/>
            </ul>
        )
    }
}


