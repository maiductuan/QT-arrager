var app = angular.module('myApp',['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl: 'home.html'
    })
    .when("/register",{
        templateUrl:"register.html",
        controller: "registerCtrl"
    })
    .when("/login",{
        templateUrl:"login.html",
        controller: "loginCtrl"
    })
    .when("/repas",{
        templateUrl:"repas.html",
        controller: "repasCtrl"
    }).otherwise({
        redirectTo:"/"
    })
});
//  đăng ký
app.controller("registerCtrl",function($scope,$http){
    $scope.addStudent =  function(){
        $http.post('http://localhost:3000/sinhvien',{
            username: $scope.username,
            fullname: $scope.fullname,
            password: $scope.password,
            email: $scope.email,
            mark:$scope.mark
        }).then(function(response){
            alert("đăng ký thành công");
        }).catch(function(error){
            alert("Đăng ký thất bại");
        })
    }
});
// đăng nhập
app.controller("loginCtrl", function ($scope, $http) {
    alert('asdsad');
    // $rootScope.logins = false;
    // if (sessionStorage.getItem("login")) {
    //     $rootScope.logins = true;
    // }

    // $rootScope.user_fullname = sessionStorage.getItem("user_fullname");
    // $scope.login = function () {
    //     $http.get("http://localhost:3000/sinhvien").then(function (res) {
    //         $scope.sinhvien = res.data;

    //         var user = checkLog();
    //         if (user) {
    //             alert("Đăng nhập tài khoản thành công!");
    //             sessionStorage.setItem("login", angular.toJson(user));
    //             sessionStorage.setItem("user_fullname", user.fullname);
    //             window.location.href = "index.html";
    //         } else {
    //             alert("Đăng nhập tài khoản thất bại! Vui lòng điền đúng thông tin");
    //             window.location.href = "#!login";
    //         }
    //     });
    // }
    // function checkLog() {
    //     for (var i = 0; i < $scope.sinhvien.length; i++) {
    //         if ($scope.username == $scope.sinhvien[i].username && $scope.password == $scope.sinhvien[i].password) {
    //             return $scope.sinhvien[i];
    //         }
    //     }
    // }
    // $scope.logout = function () {
    //     sessionStorage.removeItem("login");
    //     $rootScope.logins = false;
    // }
});
// quen mk
app.controller("repasCtrl",function($scope,$http){
    $http.get("http://localhost:3000/sinhvien").then(function(res){
            $scope.sinhvien = res.data;
        $scope.repas = function(){
            for(var i = 0; i < $scope.sinhvien.length;i++){
               if($scope.email != ""){
                   if($scope.email == $scope.sinhvien[i].email)
                        alert($scope.sinhvien[i].password);
                }
            }
        }
    })
});
