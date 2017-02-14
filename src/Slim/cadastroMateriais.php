<?php
    require 'slim/Slim.php';
    \public\Slim::registerAutoLoader();

    $app = new \public\Slim();
    
    $app->get('/:dados', function(){
        echo "Hello World";
    });
    
    $app->post('/', function(){
        
        $nome = $app->request()->getBody();
        
        echo "Hello World";
    });
    
    $app->run();
?>
