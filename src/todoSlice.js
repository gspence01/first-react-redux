import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items:[]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            return{ items: [...state.items, action.payload]}
        },

        clear: () => {
            return {items: []}
        },

        removeItem: (state, action) => {
            let itemsArray = [...state.items]
            let index = action.payload
            if (index !== -1){
                itemsArray.splice(index, 1)
                return {items: itemsArray}
            }
        }
    }
})

export const { addTodo, clear, removeItem } = todoSlice.actions
export default todoSlice.reducer