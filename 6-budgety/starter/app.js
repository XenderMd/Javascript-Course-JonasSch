
// Budget Controller
var budgetController = (function ()
{
    var Expense = function(id, description, value)
    {
        this.id=id;
        this.description=description;
        this.value=value;
    };

    var Income = function(id, description, value)
    {
        this.id=id;
        this.description=description;
        this.value=value;
    };

    

    var data = {
      allItems: {
          exp:[],
          in:[]
      },
      totals: {
          exp:0,
          inc:0
      }
    }
    
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

    var setupEventListeners = function()
    {
        var DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);
    
        document.addEventListener('keypress', function(event)
        {
            if(event.keyCode===13 || event.which===13)
            {
                ctrlAddItem();
            }
        });
    };
    var ctrlAddItem = function()
    {
         // 1. Get the field input data

         var input=UICtrl.getInput();

        // 2. Add the item to the budget controller
        // 3. Add the new item to the UI
        // 4. Calculate the budget
        // 5. Display the budget on the UI
        console.log('It works');
    };

    return {
        init: function ()
        {
            console.log('Application has started.')
            setupEventListeners();
        }
    }
})(budgetController, UIController);

controller.init();
