
// Budget contrller
var budgetController = (function() {
  var Expense = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };
  var Income = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };
  var data = {
    allItems: {
      exp: [],
      inc: []
    },
    totals: {
      exp: 0,
      inc: 0
    }
  };

  return {
    addItem: function(type, des, val) {
      var newItem, ID;

      // Create new ID
      if (data.allItems[type].length > 0) {
        ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
      } else {
        ID = 0;
      }
      // Create new item based on 'inc' or 'exp' type
      if (type === 'exp') {
        newItem = new Expense(ID, des, val);
      } else {
        newItem = new Income(ID, des, val);
      }
      // Push it into our data structure
      data.allItems[type].push(newItem);

      // Return the new element
      return newItem;
    },
    testing: function() {
      console.log(data);
      console.log(data.allItems.inc);
      console.log(data.allItems.exp.id);
    }
  };
})();


var UIController = (function() {
  var DOMstrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    addBtn: '.add__btn',
    incomeContainer: '.income__list',
    expensesContainer: '.expenses__list'    
  };
  return {
    getInput: function() {
      return {
        type: document.querySelector(DOMstrings.inputType).value, // Will be either inc or exp
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
      };
    },

    addListItem: function(obj, type) {
      var html, newHtml, element;

      // Create HTML string with placeholder text
      if (type === 'inc') {
        element = DOMstrings.incomeContainer;
        html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
      } else if (type === 'exp') {
        element = DOMstrings.expensesContainer;
        html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description% rent</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      }
      // Replace the placeholder text with some actual data
      newHtml = html.replace('%id%', obj.id);
      newHtml = newHtml.replace('%description%', obj.description);
      newHtml = newHtml.replace('%value%', obj.value);
      // Insert the HTML into the DOM
      document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
    },
    clearFields: function() {
      var fields = document.querySelectorAll(DOMstrings.inputDescription + ", " + DOMstrings.inputValue);
      var fieldsArr = Array.prototype.slice.call(fields);

      fieldsArr.forEach(function(current, index, array) {
        current.value = "";
      });

      fieldsArr[0].focus();
    },
    getDOMstrings: function() {
      return DOMstrings;
    }
  };
})();


// GLOBAL APP CONTROLLER

var controller = (function(budgetCtrl, UICtrl) {

  var setupEventListeners = function() {
    var DOM = UICtrl.getDOMstrings();
    
    document.querySelector(DOM.addBtn).addEventListener('click',ctrlAddItem);

    document.addEventListener('keypress', function(event) {
      if (event.keyCode === 13 || event.which === 13){
        ctrlAddItem();
      }
    });

  };

  var updateBudget = function() {
    // 1. Calculate the budget

    // 2. Return the budget

    // 5. Display the budget on the UI
  }
  
  var ctrlAddItem = function() {
        var input, newItem;
        // 1. Get the input data
        input = UICtrl.getInput();
        console.log(input);
        if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
          // 2 add the item to the budget controller
          newItem = budgetCtrl.addItem(input.type, input.description, input.value);
          //3 add the item to the ui
          UICtrl.addListItem(newItem, input.type);

          // Clear the fields after adding
          UICtrl.clearFields();
          // 4 calculate the budget

          // 5 display the budget on the ui
        }

  };

  return {
    init: function() {
      console.log("Application has started");
      setupEventListeners();
    }
  }
})(budgetController, UIController);

controller.init();