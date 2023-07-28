import React from 'react'
import { useLocalStorage } from './useLocalStorage'
import { useState } from 'react'

function useTodos() {

    const { 
        item:todos,
        saveItem: saveTodos,
        loading,  
        error,
        synchronizeItem: synchronizeTodos
    } = useLocalStorage('VERSION2', [])
    
    const [searchValue, setSearchValue] = React.useState('')
    const completedTodos = todos.filter(todo => todo.completed === true).length
    const totalTodos = todos.length

    const [modalIsOpen, setModalIsOpen] = useState('false')

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


    
    // const completeTodo = (text) => {
        //     saveTodos(
            //       todos.map(todo => {
                //         if (todo.text === text) {
    //           return {
        //             ...todo,
        //             completed: !todo.completed,
        //           };
    //         }
    //         return todo;
    //       })
    //     );
    // };
    const getId = () => {
        const idList = todos.map(todo => todo.id)
        if(!idList.length) {
            return 1
        }
        const maxId = Math.max(...idList)
        return maxId + 1
    }
    const addTodo = text => {
        const newId = getId()
        const newTodos = [...todos]
        newTodos.push({
            completed: false,
            text,
            id: newId
        })
        saveTodos(newTodos)  
    }

    const completeTodo = id => { 
        const todoIndex = todos.findIndex(todo => todo.id === id)
        const newTodos = [...todos]
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed
        saveTodos(newTodos)
    }

    const editTodo = (id, newText) => { 
        const todoIndex = todos.findIndex(todo => todo.id === id)
        const newTodos = [...todos]
        newTodos[todoIndex].text = newText
        saveTodos(newTodos)
    }

    const getTodo = (id) => {
        const todoIndex = todos.findIndex(todo => todo.id === id)
        return todos[todoIndex]
    }

    const removeTodos = id => {
        const todoIndex = todos.findIndex(todo => todo.id === id)
        const newTodos = [...todos]
        newTodos.splice(todoIndex, 1) 
        saveTodos(newTodos)
    }

    // function removeTodos(text){
    //     const newTodos = todos.filter(todo=>todo.text !== text)
    //     saveTodos(newTodos)
    // }



    const states = { 
        loading, 
        error,
        totalTodos,
        completedTodos,
        searchValue,
        searchedTodos,
        getTodo,
        modalIsOpen,
    }

    const stateModifiers = {
        synchronizeTodos,
        setSearchValue,
        completeTodo,
        removeTodos,
        addTodo,
        editTodo,
        setModalIsOpen, 
    }

    return { states, stateModifiers }
}

export { useTodos }