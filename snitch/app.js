var app = angular.module('myApp',['ngRoute',"appctrl","Filters"]);
app.config([
  "$routeProvider",
  function ($routeProvider) {
      $routeProvider
      .when("/", {
        templateUrl: "./views/about.html",
      })
      .when("/Category", {
        templateUrl: "./views/category.html",
      })
      .when("/add-category", {
        templateUrl: "./views/category-add.html",
      })
      .when("/edit-category", {
        templateUrl: "./views/category-edit.html",
      })
      .when("/product", {
        templateUrl: "./views/product.html",
      })
      .when("/add-product", {
        templateUrl: "./views/product-add.html",
      })
      .when("/edit-product", {
        templateUrl: "./views/product-edit.html",
      })
      .otherwise({
        templateUrl: "<h1> 404 Page Not Found </h1>",
      });
  },
]);


app.run(function ($rootScope, $http, $location) {
    $http.get("Categories.json").then(function (res) {
      $rootScope.categories = res.data;
    });
    $http.get("data.json").then(function (res) {
      $rootScope.product = res.data;
    });
  
    $rootScope.$on("$locationChangeSuccess", function () {
      console.log($location.path());
      $rootScope.page = $location.path();
    });
  });