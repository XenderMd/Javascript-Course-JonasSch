import Search from './models/Search';
import Recipe from './models/Recipe';
import List from './models/List';
import * as searchView from './Views/searchView';
import * as recipeView from './Views/recipeView';
import {elements, renderLoader, clearLoader, elementStrings} from './Views/base';

/* Global state of the app
- Search object
- Current reci[e object
- Shopping list object
- Liked recipes
*/

const state = {};


//Search controller
const controlSearch= async ()=>{
    // 1) Get the query from the view
    const query = searchView.getInput(); 


    if(query) {
        //2) New search object and add to state
        state.search=new Search(query);

        //3) Prepare UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);

        try {
            //4 Search for recipes
            await state.search.getResults()

            //5) Render results on UI
            clearLoader();
            searchView.renderResults(state.search.result);
        } catch (error){
            alert('Something went wrong with the search...');
            clearLoader();
        }
    }
}

elements.searchForm.addEventListener('submit', e=>{
    e.preventDefault();
    controlSearch();
})

elements.searchResPages.addEventListener('click', e=>{
    const btn = e.target.closest('.btn-inline');
    if(btn){
        const goToPage=parseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage)
    }
})


// Recipe Controller
const controlRecipe= async ()=>{
    
    // get ID from URL
    const id = window.location.hash.replace('#','');

    if (id)
    {
        // Prepare UI for changes
        renderLoader(elements.recipe);

        // Highlight selected search item
        if (state.search) searchView.hilightSelected(id);

        // Create new recipe object
        state.recipe= new Recipe(id);

        try {
             // Get recipe data and parse ingredients
            await state.recipe.getRecipe();
            state.recipe.parseIngredients();

             // Calculate servings and data
            state.recipe.calcTime();
            state.recipe.calcServings();

            // Rnder recipe
            clearLoader();
            recipeView.clearRecipe();
            recipeView.renderRecipe(state.recipe);
        } catch {
            alert ('Error processing recipe!');
        }
    }

}


['hashchange', 'load'].forEach(event=> window.addEventListener(event, controlRecipe));


//Handling recipe button clicks
elements.recipe.addEventListener('click', event=>{
   

    if (document.getElementById(elementStrings.btndecr).contains(event.target)){
        //Decrease button is clicked
        state.recipe.updateServings('dec');
        recipeView.updateServingsIngredients(state.recipe);
       

    } else if (document.getElementById(elementStrings.btnincr).contains(event.target)){
        // Increase button is clicked
        state.recipe.updateServings('inc');
        recipeView.updateServingsIngredients(state.recipe);
    }
});

window.l=new List();
