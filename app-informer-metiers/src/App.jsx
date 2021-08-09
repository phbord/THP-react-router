import React, { useState, useEffect, useParams } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap';
import './App.scss';

import Home from 'pages/Home'
import Recipe from 'pages/Recipe'
import Ingredients from 'pages/Ingredients'

const URL = 'https://themealdb.com/api/json/v1/1/search.php?s=a'

function App() {
  const [searchResult, setSearchResult] = useState([])
  const [savedLinks, setSavedLinks] = useState([])

  useEffect(() => {
    localStorage.setItem("lastLinks", savedLinks);
  }, [savedLinks])

  const handleSave = (e) => {
    const id = e.target.parentNode.href.split('/');
    setSavedLinks([...savedLinks, id[id.length - 1]]);
    if (savedLinks.length === 5) {
      savedLinks.shift()
      setSavedLinks(savedLinks)
    }
  }

  const getRecipe = (query) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
      .then((response) => response.json())
      .then((data) => setSearchResult(data.meals))
  }

  return (
    <div className="App">
      <Home getRecipe={getRecipe} />
      <Router>
        <div className="container my-5">
          <nav>
            {searchResult.map((recipe) => (
              <Link to={`/recipe/${recipe.idMeal}`} 
                    key={recipe.idMeal} 
                    onClick={(e) => handleSave(e)}><p>{recipe.strMeal}</p></Link>
            ))}
          </nav>
        </div>
        <Switch>
          <Route path="/recipe/:recipeId">
            <Recipe recipes={searchResult}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
