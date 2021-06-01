<?php

try{
    $conn = new PDO('sqlsrv:Server=ZERATUL\KRATOS;Database=Transito', 'sa', 'P3ch0p3lud0');
    /* echo "exito jaja"; */
}
catch (PDOException $e){
    echo 'Connection failed: ' . $e->getMessage();
}

?>

