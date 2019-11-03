
// Budget Controller
var budgetController = (function ()
{
    //Some code
    
})();


// UI Controller
var UIController = (function()
{
    var DOMStrings= {
        inputType:'.add__type',
        inputDescrption: '.add__description',
        inputValue:'.add__value',
        inputButton: '.add__btn'
    }
    
    return {
        getInput: function()
        {
            return {
            
                 type :document.querySelector(DOMStrings.inputType).value, // will be either inc or exp, from selector
                 description : document.querySelector(DOMStrings.inputDescrption).value,
                 value : document.querySelector(DOMStrings.inputValue).value
            }
        },
        getDOMstrings: function()
        {
            return DOMStrings;
        }
    }
    
})();



// Global App controller
var controller = (function (budgetCtrl, UICtrl)
{
    var DOM = UICtrl.getDOMstrings();

    var ctrlAddItem = function()
    {
         // 1. Get the field input data

         var input=UICtrl.getInput();
         console.log(input);



        // 2. Add the item to the budget controller
        // 3. Add the new item to the UI
        // 4. Calculate the budget
        // 5. Display the budget on the UI
        console.log('It works');
    }

    document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);
    
    document.addEventListener('keypress', function(event)
    {
        if(event.keyCode===13 || event.which===13)
        {
            ctrlAddItem();
        }
    });
    

})(budgetController, UIController);
