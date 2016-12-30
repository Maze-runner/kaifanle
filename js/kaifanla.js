/**
 * Created by Administrator on 2016/12/30.
 */

// 定义模块 kaifanla
var app = angular.module('kaifanla',['ng','ngRoute']);

// 定义路由词典
app.config(function($routeProvider){
    $routeProvider.when('/start',{
        templateUrl:'tpl/start.html',          // start路由
        controller:'startCtr'
    }).when('/main',{
        templateUrl:'tpl/main.html',           // main路由
        controller:'mainCtr'
    }).when('/detail',{
        templateUrl:'tpl/detail.html',         // detail路由
        controller:'detailCtr'
    }).when('/order',{
        templateUrl:'tpl/order.html',            // order路由
        controller:'orderCtr'
    }).when('/myOrder',{
        templateUrl:'tpl/myOrder.html',        // myOrder路由
        controller:'myOrderCtr'
    }).otherwise({ redirectTo:'/start' })      // 默认路由start
})


// 定义body父元素控制器
app.controller('bodyCtr',['$scope','$location','$http',function($scope,$location){

    $scope.jump = function(arg){
        $location.path(arg);
    }
}])
// start控制器
app.controller('startCtr',['$scope',function($scope){

}])
// main控制器
app.controller('mainCtr',['$scope',function($scope){

}])
// detail控制器
app.controller('detailCtr',['$scope',function($scope){

}])
// order控制器
app.controller('orderCtr',['$scope',function($scope){

}])
// myOrder控制器
app.controller('myOrderCtr',['$scope',function($scope){

}])