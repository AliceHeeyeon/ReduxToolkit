import {createSlice} from '@reduxjs/toolkit'

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todolist: []
    },
    reducers: {
        addTodo(state, action) {
            state.todolist.push({id: Date.now(), text: action.payload, completed: false})
        },
        toggleTodo(state, action) {
            const todo = state.todolist.find((todo) => todo.id === action.payload)
            if(todo) {
                todo.completed = !todo.completed
            }
        },
        deleteTodo(state, action) {
            state.todolist = state.todolist.filter((todo) => todo.id !== action.payload)
        }
    }
})

export const {addTodo, toggleTodo, deleteTodo} = todoSlice.actions;
export default todoSlice;