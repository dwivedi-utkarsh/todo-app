import { CREATE_TODO, REMOVE_TODO, MARK_TODO_AS_COMPLETED, UPDATE_TODO, PENDING_TODO, DOING_TODO } from "./actions";

export const todos = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case CREATE_TODO: {
            const { text } = payload;
            const newTodo = {
                text,
                isCompleted: false,
                isDoing: false,
            };
            return state.concat(newTodo);
        }
        case REMOVE_TODO: {
            const { text } = payload;
            return state.filter(todo => todo.text !== text);
        }
        case MARK_TODO_AS_COMPLETED: {
            const { text } = payload;
            return state.map(todo => {
                if (todo.text === text) {
                    return { ...todo, isCompleted: true, isDoing: false };
                }
                return todo;
            });
        }
        case UPDATE_TODO: {
            const { oldText, newText } = payload;
            return state.map(todo => {
                if (todo.text === oldText) {
                    return { ...todo, text: newText };
                }
                return todo;
            });
        }
        case PENDING_TODO: {
            const { text } = payload;
            return state.map(todo => {
                if (todo.text === text) {
                    return { ...todo, isCompleted: false, isDoing: false };
                }
                return todo;
            });
        }
        case DOING_TODO: {
            const { text } = payload;
            return state.map(todo => {
                if (todo.text === text) {
                    return { ...todo, isCompleted: false, isDoing: true };
                }
                return todo;
            });
        }
        default:
            return state;
    }
};
