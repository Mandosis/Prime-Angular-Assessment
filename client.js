var app = angular.module('assessmentApp', []);

app.controller('MainController', function() {
  var vm = this;
  vm.input = "";
  vm.currentMessage = "";
  vm.pastMessages = [];
  vm.showHistory = false;

  vm.addMessage = function() {

    if (vm.currentMessage != "") {
      vm.showHistory = true;
      vm.pastMessages.push(vm.currentMessage);
    }

    vm.currentMessage = vm.input;
    vm.input = "";

  }
});
