(function(){
  'use strict';

angular.module('app',[])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];

function ToBuyController(ShoppingListCheckOffService){

  var toBuy = this;

  toBuy.items = ShoppingListCheckOffService.getToBuyItems();

  toBuy.updateItem = function (index) {
      ShoppingListCheckOffService.removeItem(index);
  }

      



};

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

function AlreadyBoughtController(ShoppingListCheckOffService){

    var alreadyBought = this;

    alreadyBought.items = ShoppingListCheckOffService.getBoughtItems();
    
};

function ShoppingListCheckOffService(){

  var service = this;

  var toBuyItems = [{"name":"cookies" , "quantity":"10"},{"name":"toys" , "quantity":"20"}, {"name":"books", "quantity":"5"},{"name":"flowers" , "quantity":"30"},{"name":"videos" , "quantity":"15"}];

  var boughtItems = [];

  service.getToBuyItems = function(){
    return toBuyItems;
  };

  service.getBoughtItems = function () {
      return boughtItems;
  }

  service.removeItem = function (index) {
      var item = toBuyItems.splice(index, 1);
      //var newItem = {
      //    name: item.name,
      //    quantity: item.quantity
      //}
      
      boughtItems.push(item[0]);

  }





}








})();
