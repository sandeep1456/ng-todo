/**
 * Created by sandeepk on 1/22/2015.
 */
angular.module("todoApp", []).
    controller("MainCtrl", function($scope){
        $scope.newTodoText = "asdsd";

        $scope.todos = [
            {
                text : "Learn Basic Bootstrap",
                completed : false
            }
        ];

        $scope.clearCompleted = function(){
            $scope.todos.forEach(function(todo){
                if(todo.completed){
                    $scope.delete(todo);
                }
            })
        };

        $scope.addTodo = function(){
            $scope.todos.push($scope.newTodo);
            $scope.newTodo = {};
        };

        $scope.delete = function(todo){
            $scope.todos.splice($scope.todos.indexOf(todo), 1);
        };
    });