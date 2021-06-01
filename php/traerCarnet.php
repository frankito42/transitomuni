<?php
require "../conn.php";
$fechaAct=$_GET['fechaAct'];
$sql="select apellido,nombre,vence,categoria from carnet where fmod > :fecha";
$resCarnet=$conn->prepare($sql);
$resCarnet->bindParam(":fecha",$fechaAct);
$resCarnet->execute();
$resCarnet=$resCarnet->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($resCarnet);

?>