// useState from Hooks is necessary since this is a form and all inputs in React need their own state to function properly.
import React, { useState } from 'react';

const Search = ({ getQuery }) => {
    const [text, setText] = useState('');

    const onChange = (q) => {
        setText(q);
        getQuery(q);
    }
	return (
		<section className='search'>
			<form>
				<input
					type='text'
					className='form-control'
                    placeholder='Search characters...'
                    value={text}
                    // onChange={(e) => setText(e.target.value)}
                    onChange={(e) => onChange(e.target.value)}
					autoFocus
				/>
			</form>
		</section>
	);
};

export default Search;
