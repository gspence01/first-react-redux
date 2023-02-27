import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, clear, removeItem } from "./todoSlice";

export default function Todo() {
    const items = useSelector((state) => state.todo.items)
    const dispatch = useDispatch()
    const [input, setInput] = useState('')

    const renderItems = items.map((item, itemIndex) => <li key={itemIndex} onClick={() => dispatch(removeItem(itemIndex))}>{item}</li>)

    const submitForm = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
    }

    return (
        <div>
            <form onSubmit={(e)=>submitForm(e)}>
                <input type='text' onChange={(e) => setInput(e.target.value)} />
                <button type='submit'>Submit</button>
            </form>
            <ul>{renderItems}</ul>
            <button onClick={() => dispatch(clear())}>Clear List</button>
        </div>

    )
}