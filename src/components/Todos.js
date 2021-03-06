import React from "react";

const Todos = ({todos, deleteTodo}) => {
  const todosList = todos.length ?
  (
    todos.map( (todo) => {
      return (
        <div className="collection-item" key={todo.id}>
          <span onClick={ () => { deleteTodo(todo.id) }} >{todo.content}</span>
        </div>
      )
    })
   ) : (
    <p className="center"> you have no todo's left, Yay! </p>
  )
  return(
    <div className="Todos collection">
      {todosList}
    </div>
  )
}

export default Todos;