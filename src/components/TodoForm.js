import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {addTodo} from '../redux/todoSlice'


export const TodoForm = () => {
    const [title,setTitle]= useState()
    const dispatch = useDispatch()
    const handleChange = e => {
        setTitle(e.target.value)
    }
    return (
        <div>
            <input placeholder="Title" name="title" onChange={handleChange}/>
            <button onClick={()=> dispatch(addTodo({title: title}))}>Add todo</button>
        </div>
    )
}
