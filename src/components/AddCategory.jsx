import { useState } from "react"
import PropTypes from 'prop-types';

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const newInputValue = inputValue.trim();
        if (newInputValue.length <= 1) return;
        
        //setCategories(categories => [inputValue, ...categories]);
        onNewCategory(newInputValue)
        setInputValue('');
    }

    return (
        <form aria-label="form" onSubmit={onSubmit}>
            <input 
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}