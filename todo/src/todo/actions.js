export const CREATE_TODO = "CREATE_TODO";
export const createTodo = text => ({
    type: CREATE_TODO,
    payload: { text },
});

export const REMOVE_TODO = "REMOVE_TODO";
export const removeTodo = text => ({
    type: REMOVE_TODO,
    payload: { text },
});

export const MARK_TODO_AS_COMPLETED = "MARK_TODO_AS_COMPLETED";
export const markToDoAsCompleted = text => ({
    type: MARK_TODO_AS_COMPLETED,
    payload: { text },
});

export const UPDATE_TODO = "UPDATE_TODO";
export const updateTodo = (oldText, newText) => ({
    type: UPDATE_TODO,
    payload: { oldText, newText },
});

export const PENDING_TODO = "PENDING_TODO";
export const pendingTodo = text => ({
    type: PENDING_TODO,
    payload: { text },
});

export const DOING_TODO = "DOING_TODO";
export const doingTodo = text => ({
    type: DOING_TODO,
    payload: { text },
});
