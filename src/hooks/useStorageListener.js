import React from 'react'

function useStorageListener(synchronizeTodos) {
    
    const [storageChange, setStorageChange] = React.useState(false)

    window.addEventListener('storage', (change) => {
        if(change.key === 'VERSION1') {
            setStorageChange(true)
        }else { 
            return null
        }
    })

    const toggleShow = () => {
        synchronizeTodos()
        setStorageChange(false)
    }

    return {
        show:storageChange,
        toggleShow,
    }
}

export {useStorageListener}