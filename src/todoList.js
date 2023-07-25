import React from 'react'
import './App.css'

const TodoList = (props) => {
    return (
        <>
            <div className="list">
                <li>{props.text}</li>
                <button onClick={()=>{
                    props.onSelect(props.id)
                }}>X</button>
            </div>
        </>
    )
}

export default TodoList
