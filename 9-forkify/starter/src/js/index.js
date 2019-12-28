import Search from './models/Search';
import Recipe from './models/Recipe';
import List from './models/List';
import Likes from './models/Likes';
import * as searchView from './Views/searchView';
import * as recipeView from './Views/recipeView';
import * as listView from './Views/listView';
import {elements, renderLoader, clearLoader, elementStrings} from './Views/base';

/* Global state of the app
- Search object
- Current reci[e object
- Shopping list object
- Liked recipes
*/

const state = {};


/**
 * Search controller
 **/
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


/**
 * Recipe Controller
 **/

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

/**
 * LIST Conctroller 
 **/

const controlList = () => {
    
    // Create a new list if there is non yet
    if(!state.list) state.list = new List();

    //Delete the previous shopping list
    listView.clearList();

    // Add each ingredient to the list
    state.recipe.ingredients.forEach(el=>{
        const item = state.list.addItem(el.count, el.unit, el.ingredient);
        listView.renderItem(item);
    })
};


/**
 * LIKE Controller
 **/
const controlLike = ()=> {
    if (!state.likes) state.likes = new Likes();
    const currentID = state.recipe.id;

    if (!state.likes.isLiked(currentID)){

        // User has not yet liked current recipe


        // Add like to the state
        const newLike = state.likes.addLike(
            currentID,
            state.recipe.title,
            state.recipe.author,
            state.recipe.img
        );

        // Toggle the like button

        // Add like to UI list
            console.log(state.likes);
    }
    else{
        // User has liked the current recipe

        // Remove the like from the state
        state.likes.deleteLike(currentID);
        // Toggle the like button

        // Remove the like from the UI list
        console.log(state.likes);

    };
};





['hashchange', 'load'].forEach(event=> window.addEventListener(event, controlRecipe));


// Handle delete and update list item events
elements.shopping.addEventListener('click', e=> {
    const id = e.target.closest('.shopping__item').dataset.itemid;

    // Handle the delete event
    if(e.target.matches('.shopping__delete, .shopping__delete *'))
    {
        // Delete from State
        state.list.deleteItem(id);

        // Delete from UI
        listView.deleteItem(id)
    } // Handle the count update
    else if (e.target.matches('.shopping__count-value'))
    {
        const val = parseFloat(e.target.value, 10);
        state.list.updateCount(id, val);  
    }
});

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
    } else if (document.getElementById(elementStrings.btnaddshp).contains(event.target))
    {
        // Add ingredients to the shopping list
        controlList();
    } else if (event.target.matches('.recipe__love, .recipe__love *')){
        //Like controller
        controlLike();
    }
});