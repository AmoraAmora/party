import React,{useRef} from 'react';
import CharacterList from '../CharacterList/function';

interface FormComponentProps{
    onChangeTitle(value: string):void
}

const FormComponent: React.FC<FormComponentProps> =({onChangeTitle})=>{
    const ref = useRef<HTMLInputElement>(null)

    const KeyPressHandler = (event: React.KeyboardEvent) =>{
        if(event.key==='Enter'){
            onChangeTitle(ref.current!.value)
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
export default FormComponent;