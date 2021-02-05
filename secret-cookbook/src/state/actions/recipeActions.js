import {axiosWithAuth, baseUrl} from "../../services/auth-service";

export const FETCH_RECIPES_START = 'FETCH_RECIPES_START';
export const FETCH_RECIPES_SUCCESS = 'FETCH_RECIPES_SUCCESS';
export const FETCH_RECIPES_FAIL = 'FETCH_RECIPES_FAIL';

export const CREATE_RECIPE_START = 'CREATE_RECIPE_START';
export const CREATE_RECIPE_SUCCESS = 'CREATE_RECIPE_SUCCESS';
export const CREATE_RECIPE_FAIL = 'CREATE_RECIPE_FAIL';


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

// export const createRecipes = () => {
//   let newRecipes = axiosWithAuth().post(`${baseUrl}/recipes/`);

//   return (dispatch) => {
//       dispatch({type: CREATE_RECIPES_START});

//       newRecipes
//           .then((response) => {
//               dispatch({type: CREATE_RECIPES_SUCCESS, payload: response.data});
//           })
//           .catch((error) => {
//               dispatch({type: CREATE_RECIPES_FAIL, payload: error});
//           });
//   };
// };
