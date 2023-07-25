import React, { useState } from 'react'
import './App.css'
import TodoList from './todoList';

const App = () => {

  const [itemsList, newitemList] = useState();
  const [items, newItems] = useState([]);


  const listItems =()=>{
    newItems((oldVal)=>{
      return [...oldVal,itemsList]
    })
    newitemList('')
  }

  const deleteItem =(id)=>{
    console.log('delete')

    newItems((oldVal)=>{
      return oldVal.filter((arrlem,index)=>{
        return index !==id;
      })
    })
  }

  return (
    <>
      <div className="todo">

        <div className="main">

          <div className="center">
            <h1>TODO APP</h1>
            <div className="inner_section">
              <input type="text" value={itemsList} placeholder='Enter your data' onChange={e=>{newitemList(e.target.value)}} />
              <button onClick={listItems}>+</button>
            </div>

            <div className="todolist">
              <ul>
                {/* <li>{itemsList}</li> */}

                { items.map((itemVal,index)=>{
                  return  <TodoList text={itemVal}
                  onSelect={deleteItem} 
                    key={index}
                    id={index}
                  />
                })}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
