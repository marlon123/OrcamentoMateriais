<?php
require 'vendor/autoload.php';
require 'config/constants.php';
require 'config/config.php';
    
$app = new \Slim\App(["settings" => $config]);
    
$app->get('/', function ($request, $response) {
    
    $response->getBody()->write("Ola");

    return $response;
});

    $app->run();

?>
