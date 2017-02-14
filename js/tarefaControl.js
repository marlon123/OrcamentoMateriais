var app = angular.module('tarefaModule' , []);
app.controller('tarefaControl', function($scope,$http) {
		
	$scope.seleciona = function (tarefa) {
		$scope.tarefa = tarefa; 								  
	};	
	
	$scope.limpar = function() {
		$scope.tarefa = "";
	};
	
	$scope.pesquisar = function () {
		$http.get("http://localhost:8080/SistemaTecSoft/" +
		"rs/tarefa")			
		.success(function (retorno) {		
	  $scope.tarefas = retorno;
		}).error(function(response) {
			  alert('erro'+response);
		});		
	}
	
	$scope.salvar = function() {
		if($scope.tarefa.codigo!='')
	    	{
				$http.put("http://localhost:8080/SistemaTecSoft/" +
				"rs/tarefa",$scope.tarefa);
				$scope.pesquisar();
			}
			else{
				$http.post("http://localhost:8080/SistemaTecSoft/" +
						"rs/tarefa",$scope.tarefa);
				$scope.pesquisar();
			   }
		$scope.pesquisar();
		$scope.limpar();
	};
	
	
	$scope.excluir = function() {
		if($scope.tarefa.codigo!='')
	    	{
				$http.delete("http://localhost:8080/SistemaTecSoft/" +
				"rs/tarefa/"+$scope.tarefa.codigo);
				$scope.pesquisar();
				$scope.limpar();
			}
			else{
				alert('Não existe tarefa para ser excluída');
			   }
	
	};
	
	$scope.pesquisar();
	
	
		
});