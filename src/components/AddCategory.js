import React, { useState } from 'react'
import PropTypes from 'prop-types'



export const AddCategory = ({setCategories}) => {

    

    const [inputValue, setInputValue] = useState("");

    const inputChange = (e) => {
        setInputValue(e.target.value)
    }

    const inputSubmit = (e) => {
        // Prevenir el refresh por default del form
        e.preventDefault();

        if(inputValue.trim().length >  0){
            setCategories((cates) => [inputValue, ...cates,]);
            setInputValue("");
        }

        

    }

    return (
        // No es necesario el fragment porque el form es un agrupador <> </>

        <form onSubmit={inputSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={inputChange} />
        </form>


    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}