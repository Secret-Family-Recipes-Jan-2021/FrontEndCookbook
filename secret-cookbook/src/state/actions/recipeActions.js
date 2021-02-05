import {axiosWithAuth, baseUrl} from "../../services/auth-service";

export const FETCH_RECIPES_START = 'FETCH_RECIPES_START';
export const FETCH_RECIPES_SUCCESS = 'FETCH_RECIPES_SUCCESS';
export const FETCH_RECIPES_FAIL = 'FETCH_RECIPES_FAIL';

export const fetchRecipes = () => {
    let recipes = axiosWithAuth().get(`${baseUrl}/recipes/`);

    return (dispatch) => {
        dispatch({type: FETCH_RECIPES_START});

        recipes
            .then((response) => {
                dispatch({type: FETCH_RECIPES_SUCCESS, payload: response.data});
            })
            .catch((error) => {
                dispatch({type: FETCH_RECIPES_FAIL, payload: error});
            });
    };
};
