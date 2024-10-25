import { createSlice, nanoid } from "@reduxjs/toolkit";


export const todoSlice = createSlice({
    name: "Todos",
    initialState: {
        todos: [{
            title: 'Learn Redux',
            id: nanoid()
        }]
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({
                title: action.payload.title,
                id: nanoid()
            })

        },
        delTodo: (state, action) => {
            state.todos.splice(action.payload.index, 1)
        }
    }
}
);
export const { addTodo, delTodo } = todoSlice.actions;
export default todoSlice.reducer;