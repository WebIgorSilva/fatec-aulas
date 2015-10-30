/*DECLARAÇÃO DO MÓDULO
*PASSO 01
*/
angular.module('pessoas',[])

/*
CRIAÇÃO DA ROTAS
PASSO 03
*/
.config(function($routeProvider){
    
    $routeProvider
    .when('/', {
    templateUrl: 'listar.html'
    })
    
    .when('/pessoa/adicionar',{
        templateUrl:'adicionar.html',
        controller:'CtrlAdicionar'
    })
    
})

/*
CRIAR O CONTROLLER 
PASSO 02
*/

.controller('CtrlPessoas',function($scope){
    
    $scope.pessoas = [
        {nome:"Igor", cidade:"Porto Velho"},
        {nome:"Paulo", cidade:"Manaus"},
        {nome:"Joao", cidade:"Natal"},
        {nome:"Maria", cidade:"Fortaleza"},
    ];
    
})

.controller('CtrlAdicionar', function($scope){
    $scope.add = function(){

    
        $scope.pessoas.push($scope.pessoa);
        
        $scope.pessoa = "",
            
        $scope.result = "Adicionado com Sucesso"    
};
    
})