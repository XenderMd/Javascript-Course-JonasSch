
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
          inc:[]
      },
      totals: {
          exp:0,
          inc:0
      }
    };


    return {
        addItem: function (type, des, val)
        {
            var newItem; 
            var ID;

            // Create new ID
            if(data.allItems[type].length>0)
            {
                ID = data.allItems[type][data.allItems[type].length -1].id + 1;
            }
            else
            {
                ID=0;
            }

            // Crate new item based on 'inc' and 'exp' type
            if (type==='exp')
            {
                newItem = new Expense(ID, des, val);
            }
            else if (type==='inc')
            {
                newItem= new Income(ID, des, val);
            }

            // push it into our data structure
            data.allItems[type].push(newItem);

            // return the new element
            return newItem;
        },

        testing: function()
        {
            console.log(data);
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
        var input, newItem;

         // 1. Get the field input data

        input=UICtrl.getInput();


        // 2. Add the item to the budget controller
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);
        budgetCtrl.testing();

       
        // 3. Add the new item to the UI
        // 4. Calculate the budget
        // 5. Display the budget on the UI
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
