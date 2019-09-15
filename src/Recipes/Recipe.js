import React from 'react';
import style from './recipe.module.css';

const Recipe = ({ title, image, ingredients, link }) => {
	return (
		<div className={style.recipe}>
			<h4 className={style.text}>{title}</h4>
			<img src={image} alt="" className={style.img} />
			<h6 className={style.ingred}>Ingredients:</h6>
			<ul>
				{ingredients.map((ingredients, index) => (
					<li key={index} className={style.list}>
						{ingredients.text}
					</li>
				))}
			</ul>
			<a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-success mx-2 text-capitalize">
				Click to view Recipe
			</a>
		</div>
	);
};

export default Recipe;
