import { connect, useDispatch } from 'react-redux';
import Loader from 'react-loader-spinner';
import { useEffect } from 'react';
import { fetchRecipes } from '../state/actions/recipeActions';

const RecipeList = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecipes());
  },[]);

  // console.log(props);
  return (
    <div>
      <h2>
        { props.loading ? <Loader /> : 
          props.recipe && props.recipe.map((item) => {
            console.log(item)
            return <div className='recipe' key={item._id}>{item.recipe}</div>
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

export default connect(mapStateToProps, {})(RecipeList);