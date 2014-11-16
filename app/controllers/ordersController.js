(function() {

    var OrdersController = function ($scope, $routeParams, customersFactory) {
        var customerId = $routeParams.customerId;
        $scope.customer = null;

        function init() {
            // Search the customers for the customerId
            $scope.customer = customersFactory.getCustomer(customerId);
        }

        init();
    };

    // How to deal with Script Minifiers
    OrdersController.$inject = ['$scope', '$routeParams','customersFactory'];

    angular.module('customersApp').controller('OrdersController', OrdersController);

}());