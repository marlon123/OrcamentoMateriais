var app = angular.module('materiaisModule', []);
app.controller('materiaisControl', function ($scope, $http) {

    $scope.seleciona = function (materiais) {
        $scope.materiais = materiais;
    };

    $scope.limpar = function () {
        $scope.materiais = "";
    };

    $scope.pesquisar = function () {
        $http.get("localhost/OrcamentoMateriais/src/Slim/")
            .success(function (retorno) {
                $scope.materiais = retorno;
            }).error(function (response) {
                alert('erro' + response);
            });
    }

    $scope.salvar = function () {
        if ($scope.materiais.codigo != '') {
            $http.put("http://localhost:8080/SistemaTecSoft/" +
                "rs/projeto", $scope.materiais);
        } else {
            $http.post("http://localhost:8080/SistemaTecSoft/" +
                "rs/projeto", $scope.materiais);
        }
        $scope.pesquisar();
        $scope.limpar();
        alert('Status Projeto Salvo com sucesso!');

    };

    $scope.excluir = function () {
        alert($scope.materiais.codigo);
        if ($scope.materiais.codigo != '') {
            $http.del("http://localhost:8080/SistemaTecSoft/" +
                "rs/projeto/" + $scope.materiais.codigo);
            $scope.pesquisar();
            $scope.limpar();
        } else {

            alert('Não existe material para ser excluído');
        }

    };

    $scope.pesquisar();

});
