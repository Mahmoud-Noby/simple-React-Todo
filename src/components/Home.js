import { Component} from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo'

class Home extends Component {
   state = {
     todos: [ 
      {id: 1, content: "buy some milk"},
      {id:2, content: "Play football"}
     ]
  }
  addTodo = (todoObject) => {
    todoObject.id = Math.random();
    const newTodosList = [ ...this.state.todos, todoObject];
    this.setState({todos: newTodosList})
  }
  deleteTodo = (id) => {
    console.log(id);
    const todosList = this.state.todos.filter(todo => {
      return todo.id !== id 
    })

    this.setState({
      todos: todosList
    })

  }
  render() {
    return (
      <div className="todo-app container ">
        <h1 className="center blue-text">Todo's</h1>
        <Todos  todos={this.state.todos}  deleteTodo={this.deleteTodo} />
        <AddTodo  addTodo={this.addTodo} />
      </div>
    );
  }
}

export default Home;
