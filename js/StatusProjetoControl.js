angular
	.module('StatusProjetoModule',[])
	.controller('StatusProjetoControl', function($scope){

		$scope.seleciona = seleciona;
		$scope.limpar = limpar;
		$scope.salvar = salvar;
		
		function limpar(){
		    $scope.StatusProjetos = '';
		}

		function salvar(){
		    $scope.StatusProjetos.push($scope.StatusProjetos);
			$scope.StatusProjetos = '';
		}

	});