import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Recipe = ({ recipes }) => {
    const { recipeId } = useParams();
    const [currentRecipe, setCurrentRecipe] = useState({});
    console.log('recipeId INIT: ',recipeId)

    useEffect(() => {
        const foundRecipe = recipes.find((recipe) => recipe.idMeal === recipeId); 
        console.log('recipeId useEffect: ',recipeId)
        setCurrentRecipe(foundRecipe);
    }, [recipeId]);

    return (<>
        <div className="container">
            <h1>{currentRecipe.strMeal}</h1>
            <p>{currentRecipe.strInstructions}</p>
        </div>
    </>)
}

export default Recipe