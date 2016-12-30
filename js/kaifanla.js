/**
 * Created by Administrator on 2016/12/30.
 */

// 定义模块
var app = angular.module('kaifanla',['ng','ngRoute']);

// 定义路由词典
app.config(function($routeProvider){
    $routeProvider.when('/start',{
        templateUrl:'tpl/start.html'
    }).when('/main',{
        templateUrl:'tpl/main.html'
    }).when('/detail',{
        templateUrl:'tpl/detail.html'
    }).when('/order',{
        templateUrl:'tpl/order.html'
    }).when('/myorder',{
        templateUrl:'tpl/myorder.html'
    }).otherwise({ redirectTo:'/start' })
})


// 定义body父元素控制器
app.controller('bodyCtr',['$scope',function($scope){

}])
