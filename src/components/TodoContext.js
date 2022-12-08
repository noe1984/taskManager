import React from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

const TodoContext = React.createContext()

function TodoProvider(props) {

    const [openModal, setOpenModal] = React.useState(false)

    const { 
        item:todos,
        saveItem: saveTodos,
        loading,  
        error
    } = useLocalStorage('VERSION1', [])
    
    const [searchValue, setSearchValue] = React.useState('')
    const completedTodos = todos.filter(todo => todo.completed == true).length
    const totalTodos = todos.length

    let searchedTodos = []

    if (!searchValue.length>=1) {
        searchedTodos = todos
    } else {
        searchedTodos = todos.filter(todo => {
            let searchText = searchValue.toLowerCase()
            let todoText = todo.text.toLowerCase()
            return todoText.includes(searchText)
        })
    }


    const completeTodo = text => { 
        const todoIndex = todos.findIndex(todo => todo.text === text)
        const newTodos = [...todos]
        newTodos[todoIndex].completed = true 
        saveTodos(newTodos)
    }

    const removeTodos = text => {
        const todoIndex = todos.findIndex(todo => todo.text === text)
        const newTodos = [...todos]
        newTodos.splice(todoIndex, 1)
        saveTodos(newTodos)
    }

    const addTodo = text => {
        const newTodos = [...todos]
        newTodos.push({
            completed: false,
            text
        })
        saveTodos(newTodos)
    }

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            removeTodos,
            addTodo,
            openModal,
            setOpenModal
        }}>
            {props.children}                                 
        </TodoContext.Provider>
    )
}

export {TodoContext, TodoProvider}