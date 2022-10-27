import { useState } from "react"




export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setinputValue] = useState('One Punch')

    const OnInputChange = (event) =>{
        console.log(event.target.value)
        setinputValue(event.target.value)
    }

    const onSubmit = ( event ) =>{
        event.preventDefault();
        
        if(inputValue.trim().length <= 1)return;

        // setCategories( categories => [ inputValue, ...categories ]);
        onNewCategory( inputValue.trim() );
        setinputValue('');
    }

  return (

        <form onSubmit={ onSubmit}>
            <input
                type="text"
                placeholder="Buscar Gift"
                value={inputValue}
                onChange={ OnInputChange }
            />
        </form>
  )
}
