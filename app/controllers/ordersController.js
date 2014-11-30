(function() {

    var OrdersController = function ($scope, $routeParams, customersFactory) {
        var customerId = $routeParams.customerId;
        $scope.customer = null;

        function init() {
            // Search the customers for the customerId
            customersFactory.getCustomer(customerId)
                .success(function(customer) {
                    $scope.customer = customer;
                })
                .error(function(data, status, headers, config) {
                    // handle the error
                });
        }

        init();
    };

    // How to deal with Script Minifiers
    OrdersController.$inject = ['$scope', '$routeParams','customersFactory'];

    angular.module('customersApp').controller('OrdersController', OrdersController);

}());