import { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {

  const [inputValue, setInputValue] = useState('One Punch Man')
  const onInputChange = ({target}) => {
    setInputValue(target.value)
  }
  const onSubmit = (event) => {
    event.preventDefault();
    const newValue = inputValue.trim();
    if(newValue.length <= 1) return;
    onNewCategory(newValue)
    setInputValue('')
  }

  return (
    <form onSubmit={onSubmit}>
        <input 
            type="text"
            placeholder="Buscar gifs"
            value={inputValue}
            onChange={onInputChange}
        />
    </form>
  )
}
