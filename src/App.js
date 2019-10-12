import React, { useEffect, useState } from 'react';
import Recipe from './Recipes/Recipe';
import Header from './Header/header';
import './App.css';
import { Eclipse } from 'react-loading-io';
import Footer from './Footer/footer';
//import Quotes from './quotes';

const App = () => {
	const key = process.env.REACT_APP_KEY;
	const id = process.env.REACT_APP_ID;

	//const example=`https://api.edamam.com/search?q=chicken&app_id=${id}&app_key=${key}`
	const [ loader, setLoader ] = useState(false);
	const [ recipes, setRecipes ] = useState([]);
	const [ search, setSearch ] = useState('');
	const [ query, setQuery ] = useState('');
	const [ error, setError ] = useState(false);

	useEffect(
		() => {
			getRecipes();
		},
		[ query ]
	);

	const getRecipes = async () => {
		const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${id}&app_key=${key}`); //fetching key
		const data = await response.json();
		setRecipes(data.hits);
		if (data.q !== '' && data.hits.length === 0) {
			setError(true);
		} else {
			setError(false);
		}
	};

	const updateSearch = (e) => {
		setSearch(e.target.value);
	};

	const getSearch = (e) => {
		e.preventDefault();
		setQuery(search);
		setSearch('');
	};

	const loading = () => {
		setLoader(true);
	};

	setTimeout(() => {			//timeout function
		setLoader(false);
	}, 5000);

	const styleload = {
		marginTop: '180px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	};

	let comp = null;

	if (loader === true) {
		comp = (
			<div>
				<div className="header">
					<form onSubmit={getSearch} className="search-form">
						<input className="search-bar" type="text" value={search} onChange={updateSearch} placeholder="Search Recipes" />
						<button onClick={loading} className="search-button" type="submit">
							<i className="fa fa-search" />
						</button>
					</form>
				</div>
				<div style={styleload}>{<Eclipse size={150} color={'#000000'} thickness={5} />}</div>
			</div>
		);
	}
	if (loader === false) {
		if (error === false) {
			comp = (
				<div>
					<div className="header">
						<form onSubmit={getSearch} className="search-form">
							<input
								className="search-bar"
								type="text"
								value={search}
								onChange={updateSearch}
								placeholder="Search Recipes"
							/>
							<button onClick={loading} className="search-button" type="submit">
								<i className="fa fa-search" />
							</button>
						</form>
					</div>

					<div className="recipes">
						{recipes.map((recipe, index) => (
							<Recipe
								key={index}
								title={recipe.recipe.label}
								image={recipe.recipe.image}
								ingredients={recipe.recipe.ingredients}
								link={recipe.recipe.url}
							/>
						))}
					</div>
				</div>
			);
		}
		if (error === true) {
			comp = (
				<div>
					<div className="header">
						<form onSubmit={getSearch} className="search-form">
							<input
								className="search-bar"
								type="text"
								value={search}
								onChange={updateSearch}
								placeholder="Search Recipes"
							/>
							<button onClick={loading} className="search-button" type="submit">
								<i className="fa fa-search" />
							</button>
						</form>
					</div>

					<div className="error">
						<p>
							Oops!!! <br /> Sorry, there are no search results for "{query}"
						</p>
					</div>
				</div>
			);
		}
	}

	return (
		<div className="App">
			<div className="viewport">
				<Header />

				{comp}
			</div>
			<Footer />
		</div>
	);
};

export default App;
