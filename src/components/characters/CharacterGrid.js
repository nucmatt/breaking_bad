import React from 'react'
// Once you have your global state in App.js set as props passed in to your compoenent(in App.js), the props need to be passed down in to the component itself. This is done within the parentheses. The object in to parentheses here is simply destructuring so you don't have to use props.xxx all the time. 
const CharacterGrid = ({ items, isLoading }) => {
    return isLoading ? (<h1>Loading...</h1>) : (<section className='cards'>
        {/* Since the map is outputting JSX you want to use parentheses instead of curly braces as you would with normal JS. */}
        {items.map(item => (
            <h1 key={item.char_id}>{item.name}</h1>
        ))}
    </section>)
}

export default CharacterGrid

