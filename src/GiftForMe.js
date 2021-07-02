import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GiftGrid } from './components/GiftGrid';


// dT0JpDc0dB2TmP0KjZ0oDoXTCAACk8mg
const GiftForMe = () => {

    // const categories = ['A', 'B', 'C'];
    const [categories, setCategories] = useState(['Sexy Crisp Girl']);

    // const addCategory = () => {
    //     // setCategories(['D', ...categories]);
    //     setCategories((cates) => ['D', ...cates]);
    // }

    return (
        <>
            <h2>Gift for Me</h2>
            <AddCategory setCategories={setCategories} />
            <hr></hr>

            <ol>
                {
                    categories.map((category) => (
                        <GiftGrid
                            key={category}
                            category={category}
                        />
                    ))
                }

            </ol>


        </>
    )
}

export default GiftForMe