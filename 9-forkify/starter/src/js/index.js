import Search from './models/Search';
import Recipe from './models/Recipe';
import * as searchView from './Views/searchView';
import {elements, renderLoader, clearLoader} from './Views/base';

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
    const query = searchView.getInput(); //TODO 
    //console.log(query);

    if(query) {
        //2) New search object and add to state
        state.search=new Search(query);

        //3) Prepare UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);

        //4 Search for recipes
        await state.search.getResults()

        //5) Render results on UI
        clearLoader();
        searchView.renderResults(state.search.result);
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

const r= new Recipe(47746);
r.getRecipe();