import React,{useRef} from 'react';

interface FormComponentProps{
    onAdd(title:string):void
}

const FormComponent: React.FC =()=>{
    const ref = useRef<HTMLInputElement>(null)

    const addHandler = (title:string) =>{
        console.log('add new', title);
    
      }

    const KeyPressHandler = (event: React.KeyboardEvent) =>{
        if(event.key==='Enter'){
            addHandler(ref.current!.value)
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