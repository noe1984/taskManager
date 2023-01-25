import React from 'react'
import {useStorageListener} from '../hooks/useStorageListener'
import './styles/ChangeAlert.css'

function ChangeAlert({synchronizeTodos}) {
  const {show, toggleShow} = useStorageListener(synchronizeTodos)
    if (show) {
        return (
          <div className="ChangeAlert-bg">
            <div className="ChangeAlert-container">
              <p>Parece que modificaste tus tareas en otra ventana del navegador!!</p>
              <p>¿Quieres sincronizar tus tareas?</p>
              <button
                className="TodoForm-button TodoForm-button--add"
                onClick={toggleShow}
              >
                Si!
              </button>
            </div>
          </div>
        );
      } else {
        return null;
    }
}

export { ChangeAlert }