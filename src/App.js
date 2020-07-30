import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid'
import './App.css';

const App = () => {
	// useState and useEffect are React Hooks methods. We are using Hooks to handle state for this project.
	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		// You can't just use axios async/await within useEffect, you need to do the below to utilize them properly.
		const fetchItems = async () => {
			const result = await axios(
				`https://www.breakingbadapi.com/api/characters`
			);

			console.log(result.data);
			setItems(result.data);
			setIsLoading(false);
		};

		// Call fetchItems here to fire off the http request.
		fetchItems();
	}, []);

	return (
		<div className='container'>
			<Header />
      {/* With React Hooks you pass your global(App.js) state into your components as props as below. */}
      <CharacterGrid isLoading={isLoading} items={items} />
		</div>
	);
};

export default App;
