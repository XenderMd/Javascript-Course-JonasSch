import axios from 'axios'

//const res = await axios(`https://forkify-api.herokuapp.com/api/get?rId=${this.id}`);


export default class Recipe {
    constructor(id)
    {
        this.id=id;
    }

    async getRecipe(){
        try{
            const res = await axios(`https://forkify-api.herokuapp.com/api/get?rId=${this.id}`);
            this.title=res.data.recipe.title;
            this.author=res.data.recipe.publisher;
            this.img=res.data.recipe.image_url;
            this.url=res.data.recipe.source_url;
            this.ingredients=res.data.recipe.ingredients;
        }
        catch(error){
            console.log(error);
            alert('Something went wrong :( ')
        }
    }

    calcTime(){

        // Asuming that we need 15 mins fore each 3 ingredients
        const numIng = this.ingredients.length;
        const periods = Math.ceil(numIng/3);
        this.time=periods*15;
    }

    calcServings() {
        this.servings = 4;
    }

    parseIngredients ()
    {
        const unitsLong = ['tablespoons', 'tablespoon', 'ounces', 'ounce', 'teaspoons', 'teaspoon', 'cups', 'pounds'];
        const unitsShort = ['tbsp', 'tbsp', 'oz', 'oz', 'tsp', 'tsp', 'cup', 'pound'];
        const units=[...unitsShort, 'kg', 'g']

        const newIngredients = this.ingredients.map(el => {
            // 1. Uniform units
            let ingredient = el.toLowerCase();
            unitsLong.forEach((unit, i) => {
                ingredient = ingredient.replace(unit, units[i]);
            });

            // 2. Remove paranthesis
            ingredient=ingredient.replace(/ *\([^)]*\) */g,' ')

            //3. Parse ingredients into count, unit and ingredient
            const arrIng = ingredient.split(' ');
            const unitIndex = arrIng.findIndex(el2 => unitsShort.includes(el2));

            let objIng;
            if (unitIndex>-1){
                const arrCount = arrIng.slice(0, unitIndex); 
                // Ex. 4 1/2 cups, arrCount is [4, 1/2] -> eval('4+1/2')->4.5
                // Ex. 4 cups, arrCount is [4];
                
                let count;
                if (arrCount.length ===1){
                    count = Math.round(eval(arrIng[0].replace('-', '+'))*10)/10;
                } else {
                    count = Math.round(eval(arrIng.slice(0, unitIndex).join('+'))*10)/10;
                };

                objIng = {
                    count,
                    unit: arrIng[unitIndex],
                    ingredient: arrIng.slice (unitIndex+1).join(' ')
                };
            }
            else if (parseInt(arrIng[0], 10)){
                // There is NO unit, but the 1st element is number
                objIng = {
                    count : parseInt (arrIng[0], 10),
                    unit: '',
                    ingredient: arrIng.slice(1).join(' ')
                }
            }
            else if (unitIndex ===-1)
            {
                // there is NO unit and no number in the 1st position
                objIng={
                    count : 1,
                    unit : '',
                    ingredient
                }
            }

            return objIng;
        });
        this.ingredients= newIngredients;
    }

    updateServings(type){
        //Servings
        
        let newServings = this.servings;

        if (type ==='dec' & this.servings>1)
        {
            newServings = this.servings-1;
        }
        else if (type === 'inc')
        {
            newServings = this.servings+1;
        }
        
        // Ingredients

        this.ingredients.forEach(ing=>{
            ing.count=Math.round(ing.count*(newServings/this.servings)*10)/10;
        });

        this.servings=newServings;
    }

}