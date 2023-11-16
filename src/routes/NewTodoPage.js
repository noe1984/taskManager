import { TodoForm } from '../components/TodoForm'; 
import { useTodos } from '../hooks/useTodos';
import newTaskImage from '../assets/newTask.jpg'

function NewTodoPage() {
    const { stateModifiers} = useTodos()
    const { addTodo } = stateModifiers
    const blurhash = 'LERymUVq~o-=^+tSNdMw?tx]IWD*'
    
    return (
        <div>
            <TodoForm
                formTitle={'Crea un nuevo todo'} 
                submitText={'crear'} 
                submitEvent={addTodo}
                formImage={newTaskImage}
                blurhash={blurhash}
            />
        </div>
    )
}

export {NewTodoPage}
