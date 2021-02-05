import {
  FETCH_RECIPES_START,
  FETCH_RECIPES_SUCCESS,
  FETCH_RECIPES_FAIL,
} from "../actions/recipeActions";

export const initialState = {
  loading: false,
  errors: null,
  recipes: null,
};

export const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RECIPES_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_RECIPES_SUCCESS:
      return {
        ...state,
        recipes: action.payload,
        loading: false,
        errors: null,
      };
    case FETCH_RECIPES_FAIL:
      return {
        ...state,
        errors: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
