var crudAtendimento = angular.module('crudTecsoft', ["ngResource"]);

crudAtendimento.controller("TecsoftController", ["$resource", "$scope", function($resource, $scope) {
	var angularResource = $resource("/SistemaTecSoft/rs/funcionario");
	var angularResourceParam = $resource("/SistemaTecSoft/rs/funcionario/:codFuncionario", {codFuncionario : "@codFuncionario"});
	$scope.funcionarios = angularResource.query(function(){});
	
	$scope.salvar = function() {
		var newResource = new angularResource($scope.funcionario);
		newResource.$save(function(){
			$scope.funcionarios.push(newResource);
			$scope.novo(); 
		});
	}
	
	$scope.editar = function() {
		var newResource = new angularResource($scope.funcionario);
		newResource.$save(function(){
			$scope.novo(); 
		});
	}
	
	$scope.excluir = function() {
		var newResource = new angularResourceParam($scope.funcionario);
		newResource.$delete(function() {
			$scope.funcionarios.splice($scope.funcionarios.indexOf($scope.funcionario), 1);
			$scope.novo();  
		});
	}
	
	$scope.novo = function () { 
		$scope.funcionario = "";
	}; 	
	
	$scope.seleciona = function (funcionario) {
		$scope.funcionario = funcionario; 								  
	};	
	
}])