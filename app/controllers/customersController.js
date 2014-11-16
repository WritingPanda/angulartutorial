// Option 1

//app.controller('CustomersController', function ($scope) {
//    $scope.sortBy = 'name';
//    $scope.reverse = false;
//    $scope.customers = [
//        {joined: '2000-12-02', name:'Omar', city: 'San Antonio', orderTotal: '9.9956'},
//        {joined: '2013-01-09', name:'Becky', city: 'Changsha', orderTotal: '11.0242'},
//        {joined: '1943-06-22', name:'Mateo', city: 'Boston', orderTotal: '5.6424'},
//        {joined: '1985-03-18', name:'Josef', city: 'Vladivostok', orderTotal: '110.9961'},
//        {joined: '2002-07-24', name:'Diego', city: 'San Diego', orderTotal: '900.9392'}
//    ];
//    $scope.doSort = function(propName) {
//        $scope.sortBy = propName;
//        $scope.reverse = !$scope.reverse
//    };
//});

// Option 2

//(function() {
//    angular.module('customersApp').controller('CustomersController', function ($scope) {
//        $scope.sortBy = 'name';
//        $scope.reverse = false;
//        $scope.customers = [
//            {joined: '2000-12-02', name:'Omar', city: 'San Antonio', orderTotal: '9.9956'},
//            {joined: '2013-01-09', name:'Becky', city: 'Changsha', orderTotal: '11.0242'},
//            {joined: '1943-06-22', name:'Mateo', city: 'Boston', orderTotal: '5.6424'},
//            {joined: '1985-03-18', name:'Josef', city: 'Vladivostok', orderTotal: '110.9961'},
//            {joined: '2002-07-24', name:'Diego', city: 'San Diego', orderTotal: '900.9392'}
//        ];
//        $scope.doSort = function(propName) {
//            $scope.sortBy = propName;
//            $scope.reverse = !$scope.reverse
//        };
//    });
//}());

// Option 3

(function() {

    var CustomersController = function ($scope) {
        $scope.sortBy = 'name';
        $scope.reverse = false;
        $scope.customers = [
            {joined: '2000-12-02', name:'Omar', city: 'San Antonio', orderTotal: '9.9956'},
            {joined: '2013-01-09', name:'Becky', city: 'Changsha', orderTotal: '11.0242'},
            {joined: '1943-06-22', name:'Mateo', city: 'Boston', orderTotal: '5.6424'},
            {joined: '1985-03-18', name:'Josef', city: 'Vladivostok', orderTotal: '110.9961'},
            {joined: '2002-07-24', name:'Diego', city: 'San Diego', orderTotal: '900.9392'}
        ];
        $scope.doSort = function(propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse
        };
    };

    angular.module('customersApp').controller('CustomersController', CustomersController);

}());