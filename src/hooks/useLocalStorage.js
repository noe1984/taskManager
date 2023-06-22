import React from 'react'

const initialState = ({initialValue}) => ({
  item: initialValue,
  loading: true,
  error: false,
  synchronizedItem: true
})


const storageReducer = (state, action) => {
  switch(action.type) {
    case "SUCCESS": return {
      ...state,
      item: action.payload,
      loading: false,
      synchronizedItem: true 
    }
    case "ERROR": return {
      ...state,
      error: true
    }
    case "SYNC": return {
      ...state,
      loading: true,
      synchronizedItem: false
    }
    case "SAVE": return {
      ...state,
      item: action.payload,
      loading: false
    }
    default: return {
      initialState
    }
  }
}


function useLocalStorage(itemName, initialValue) {
  const [state, dispatch] = React.useReducer(storageReducer, initialState({initialValue}))
  const {
    item,
    loading,
    error,
    synchronizedItem,
  } = state


  React.useEffect(() => { 
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName)
        let parsedItem
        
        if(!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem = initialValue
        }else{
          parsedItem = JSON.parse(localStorageItem)
        }
        dispatch({type: 'SUCCESS', payload: parsedItem})
      } catch (error) {
        dispatch({type: "ERROR"})
      }
    },2000);
  },[synchronizedItem])

  const synchronizeItem = () => { 
    dispatch({type: "SYNC"})
  }

  const saveItem = (newItem) => { 
    try {
      const stringifiedItem = JSON.stringify(newItem)
      localStorage.setItem(itemName, stringifiedItem) 
      dispatch({type: "SAVE", payload: newItem})
    } catch (error) {
      dispatch({type: "ERROR"})
    }
  }

  return {
    item, 
    saveItem,
    loading,
    error,
    synchronizeItem,
  }
}

export {useLocalStorage}