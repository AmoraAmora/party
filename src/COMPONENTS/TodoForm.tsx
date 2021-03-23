import React,{useRef} from 'react';

interface TodoFormProps{
    onAdd(title:string):void
}

const TodoForm: React.FC<TodoFormProps> =(props)=>{
    const ref = useRef<HTMLInputElement>(null)

    const KeyPressHandler = (event: React.KeyboardEvent) =>{
        if(event.key==='Enter'){
             props.onAdd(ref.current!.value)
             ref.current!.value=''
        }
    }

    return (
        <form>
            <input type="text" 
            ref={ref}
            onKeyPress={KeyPressHandler}
            />
        </form>
    )
        
}
export default TodoForm;