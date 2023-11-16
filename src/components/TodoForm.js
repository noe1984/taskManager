import React, { useRef, useState } from 'react' 
import './styles/TodoForm.css'
import { useNavigate } from 'react-router'
import { Blurhash } from 'react-blurhash'

const useLoadImage = () => {
    const [loading, setLoading] = useState(true)
    const ref = useRef()
    
    const onLoad = () => {
        if (ref.current && ref.current.complete) { 
            setLoading(false)
        }
    }
    
    return { loading, ref, onLoad }
}


function TodoForm(props) {
    const { loading, ref, onLoad } = useLoadImage()
    const navigate = useNavigate()
    const [todoValue, setTodoValue] = React.useState('' || props.textToEdit)


    function onChange(e) {
        setTodoValue(e.target.value)
    }

    function onSubmit(e) {
        e.preventDefault()
        props.submitEvent(todoValue)
        navigate('/')
    }
 
    function onCancel() { 
        navigate('/')
    }


    return ( 
        <div className='formContainer'>
            <div className='formContainer-image'>
                {(loading &&
                    <Blurhash 
                        hash={props.blurhash}
                        width='300px'
                        height='200px'
                        border-radius= '10%'
                    />
                )}
                {<img src={props.formImage} ref={ref} onLoad={onLoad} alt='form' />}
            </div>
            
            <form onSubmit={onSubmit} className='form'>
                
                <label>{props.formTitle}</label>

                <textarea
                    placeholder="Escribe aqui una actividad a realizar..."
                    onChange={onChange}
                    value={todoValue} 
                />

                <div className="TodoForm-buttonContainer">

                    <button
                        type="button"
                        className="TodoForm-button TodoForm-button--cancel"
                        onClick={onCancel}
                        >
                        Cancelar
                    </button> 

                    <button
                        type="submit"
                        className="TodoForm-button TodoForm-button--add"
                    >
                        {props.submitText}
                    </button>

                </div>
            </form>
        </div>
    )
}


export {TodoForm} 