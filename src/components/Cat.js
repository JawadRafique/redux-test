import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getCatFactsAsync} from '../redux/todoSlice'

export const Cat = () => {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    useEffect(() => {      
        dispatch(getCatFactsAsync())
    }, [dispatch])

    return (
        <div>
            <h1>Facts about Cats</h1>
            <h3>{todos.catFacts}</h3>
        </div>
    )
}
