//import axios from "axios";
import React, { useState } from "react";
import { axiosWithAuth, baseUrl } from "../services/auth-service";

const RecipeForm = () => {
  const [title, setTitle] = useState("");
  const [source, setSource] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  // const [catagories, setCatagories] = useState("");

  const newRecipe = async (e) => {
    e.preventDefault();
    
    const recipeData = {
      title: title,
      source: source,
      ingredients: ingredients,
      instructions: instructions,
      catagories: '1,2,3',
    };
    axiosWithAuth()
      .post(`${baseUrl}/recipes`, recipeData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={newRecipe}>
        <label htmlFor="title-input">Title</label>
        <input
          id="title-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <label htmlFor="source-input">Source</label>
        <input
          id="source-input"
          value={source}
          onChange={(e) => setSource(e.target.value)}
        />
        <br />
        <label htmlFor="ingredients-input">Ingredients</label>
        <textarea
          id="ingredients-input"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
        <br />
        <label htmlFor="instructions-input">Instructions</label>
        <textarea
          id="instructions-input"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
        />
        <br />
        <label htmlFor="catagories-input">Catagories</label>
        <input
          // id="catagories-input"
          // value={catagories}
          // onChange={(e) => setCatagories(e.target.value)}
        />
        <button>Add New Recipe</button>
      </form>
    </div>
  );
};

export default RecipeForm;
