import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.css';
import NewTodoForm from './NewTodoForm';
import { connect } from 'react-redux';
import { removeTodo, markToDoAsCompleted, updateTodo, pendingTodo, doingTodo } from './actions';

const TodoList = ({ todos = [], onRemovePressed, onCompletedPressed, onUpdatePressed, onPendingPressed, onDoingPressed }) => (
    <div className="list-wrapper">
        <NewTodoForm />
        {todos.map(todo => (
            <TodoListItem
                key={todo.text}
                todo={todo}
                onRemovePressed={onRemovePressed}
                onCompletedPressed={onCompletedPressed}
                onUpdatePressed={onUpdatePressed}
                onPendingPressed={onPendingPressed}
                onDoingPressed={onDoingPressed}
            />
        ))}
    </div>
);

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
    onCompletedPressed: text => dispatch(markToDoAsCompleted(text)),
    onUpdatePressed: (oldText, newText) => dispatch(updateTodo(oldText, newText)),
    onPendingPressed: text => dispatch(pendingTodo(text)),
    onDoingPressed: text => dispatch(doingTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
