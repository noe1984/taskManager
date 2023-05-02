import React from 'react'
import { useLocalStorage } from './useLocalStorage'

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
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed
        saveTodos(newTodos)
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

    const removeTodos = text => {
        const todoIndex = todos.findIndex(todo => todo.text === text)
        const newTodos = [...todos]
        newTodos.splice(todoIndex, 1) 
        saveTodos(newTodos)
    }

    // function removeTodos(text){
    //     const newTodos = todos.filter(todo=>todo.text !== text)
    //     saveTodos(newTodos)
    // }

    const getId = () => {
        const idList = todos.map(todo => todo.id)
        console.log(idList)
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

    const states = {
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        searchedTodos,
        
    }

    const stateModifiers = {
        synchronizeTodos,
        setSearchValue,
        completeTodo,
        removeTodos,
        addTodo,
    }

    return { states, stateModifiers }
}

export { useTodos }