var app = angular.module('statusPagamentoModule' , []);
app.controller('statusPagamentoControl', function($scope,$http) {
	
	
	//$scope.statusPagamentos = angularResource.query(function(){}); //aqui
		
	$scope.seleciona = function (statusPagamento) {
		$scope.statusPagamento = statusPagamento; 								  
	};	
	
	$scope.limpar = function() {
		$scope.statusPagamento = "";
	};
	
	$scope.pesquisar = function () {
		$http.get("http://localhost:8080/SistemaTecSoft/" +
		"rs/statusPagamento")			
		.success(function (retorno) {		
	  $scope.statusPagamentos = retorno;
		}).error(function(response) {
			  alert('erro'+response);
		});		
	}
	
	$scope.salvar = function() {
		if($scope.statusPagamento.codigo!='')
	    	{
				$http.put("http://localhost:8080/SistemaTecSoft/" +
				"rs/statusPagamento",$scope.statusPagamento);
				//$scope.statusPagamentos.push($scope.statusPagamento);// aqui
			}
			else{
				$http.post("http://localhost:8080/SistemaTecSoft/" +
						"rs/statusPagamento",$scope.statusPagamento);
				//$scope.statusPagamentos.push($scope.statusPagamento);// aqui
			   }
		$scope.pesquisar();
		$scope.limpar();
	};
	
	
	$scope.excluir = function() {
		if($scope.statusPagamento.codigo!='')
	    	{
				$http.delete("http://localhost:8080/SistemaTecSoft/" +
				"rs/statusPagamento/"+$scope.statusPagamento.codigo);
				$scope.pesquisar();
				$scope.limpar();
			}
			else{
				alert('Não existe statusPagamento para ser excluído');
			   }
	
	};
	
/*	$scope.excluir = function() {
		var newResource = new angularResourceParam($scope.atendimento);
		newResource.$delete(function() {
			$scope.atendimentos.splice($scope.atendimentos.indexOf($scope.atendimento), 1);
			$scope.novo();  
		});
	}*/
	
	$scope.pesquisar();
	
	
		
});