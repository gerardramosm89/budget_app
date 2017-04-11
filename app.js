
// Budget contrller
var budgetController = (function() {
  var x = 23;

  var add = function(a) { 
    return x + a
  };

  return {
    publicTest: function(b) {
      console.log(add(b));
      return add(b);
    }
  }
})();

var UIController = (function() {

})();


// GLOBAL APP CONTROLLER

var controller = (function(budgetCtrl, UICtrl) {
  var z = budgetCtrl.publicTest(5);

  document.querySelector('.add__btn').addEventListener('click', function() {
    console.log("clicked");
    // 1. Get the input data

    // 2 add the item to the budget controller

    //3 add the item to the ui

    // 4 calculate the budget

    // 5 display the budget on the ui

  });

  document.addEventListener('keypress', function(event) {
    console.log(event.key);
    if (event.key == 'Enter') {
      document.querySelector('.add__btn').click();
    }
  });

  return {
    anotherPublic: function() {
      console.log(z);
    }
  }
})(budgetController, UIController);