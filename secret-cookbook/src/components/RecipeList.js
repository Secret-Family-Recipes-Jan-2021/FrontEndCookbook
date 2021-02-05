import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import React, { useEffect } from 'react';
import { fetchRecipes } from '../state/actions/recipeActions';
import RecipeForm from '../components/RecipeForm';

const RecipeList = (props) => {

  useEffect(() => {
    props.fetchRecipes();
  },[]);

  return (
    <div>
      <RecipeForm />
      <h2>
        { props.loading ? <Loader /> : 
          props.recipes && props.recipes.map((item) => {
            console.log(item)
            return <div className='recipe' key={item.id}>
                <h2>{item.title}</h2>
                <p>{item.ingredients}</p>
                <p>{item.instructions}</p>
                <p>{item.username}</p>
            </div>
          })
        }
      </h2>
    </div>
  );
};

const mapStateToProps = (state) => ({
  recipes: state.recipes,
  loading: state.loading,
});

export default connect(mapStateToProps, {fetchRecipes})(RecipeList);
