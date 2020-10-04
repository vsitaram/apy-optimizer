import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import { getTodos } from "../redux/selectors";

const TodoList = ({ todos }) => (
  <ul className="todo-list">
    {todos && todos.length
      ? todos.map((todo, index) => {
          return <Todo key={`todo-${todo.id}`} todo={todo} />;
        })
      : "No Accounts!"}
  </ul>
);

const mapStateToProps = state => ({todos: getTodos(state)});

// export default TodoList;
export default connect(mapStateToProps)(TodoList);
