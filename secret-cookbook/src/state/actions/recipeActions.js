import * as recipeService from '../../services/recipe-service';

export const FETCH_RECIPES_START = 'FETCH_RECIPES_START';
export const FETCH_RECIPES_SUCCESS = 'FETCH_RECIPES_SUCCESS';
export const FETCH_RECIPES_FAIL = 'FETCH_RECIPES_FAIL';

export const fetchRecipes = () => async (dispatch) => {
  dispatch({type: FETCH_RECIPES_START});

  try {
    const recipes = await recipeService.fetchRecipes();
    dispatch({type: FETCH_RECIPES_SUCCESS, payload: recipes});
  } catch (err) {
    dispatch({type: FETCH_RECIPES_FAIL, payload: err.data});
  }
};