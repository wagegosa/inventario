<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connection.php';

$data = json_decode(file_get_contents("php://input"));

if(isset($data->NombreProducto) && isset($data->Referencia)&& isset($data->precio) && isset($data->Peso)&& isset($data->Categoría)&& isset($data->Stock)&& isset($data->FechaCreacion)&& isset($data->FechaVentaUltima) && !empty(trim($data->NombreProducto))&& !empty(trim($data->Referencia))&& !empty(trim($data->precio))&& !empty(trim($data->Peso))&& !empty(trim($data->Categoría))&& !empty(trim($data->Stock))&& !empty(trim($data->FechaCreacion))&& !empty(trim($data->FechaVentaUltima))){
    $nombreProducto = mysqli_real_escape_string($db_conn, trim($data->nombreProducto));
    $referencia = mysqli_real_escape_string($db_conn, trim($data->referencia));
    $precio = mysqli_real_escape_string($db_conn, trim($data->precio));
    $peso = mysqli_real_escape_string($db_conn, trim($data->peso));
    $categoría = mysqli_real_escape_string($db_conn, trim($data->categoria));
    $stock = mysqli_real_escape_string($db_conn, trim($data->stock));
    $fechaCreacion = mysqli_real_escape_string($db_conn, trim($data->fechaCreacion));
    $fechaVentaUltima = mysqli_real_escape_string($db_conn, trim($data->fechaVentaUltima));
    $query = "UPDATE productos SET NombreProducto= '$nombreProducto', Referencia= '$referencia, precio= $precio,
              Peso=  '$peso, Categoría= '$categoría', Stock= '$stock', FechaCreacion= '$fechaCreacion', FechaVentaUltima= '$fechaVentaUltima' 
              WHERE ID= $data->id";
    $update = mysqli_query($db_conn,$query);
    if($update){
        echo json_encode(["success"=>1,"msg"=>"Producto Actualizado."]);
    }
    else{
        echo json_encode(["success"=>0,"msg"=>"No Se pudo actualiza producto!"]);
    }
}
else{
    echo json_encode(["success"=>0,"msg"=>"Producto no encontrado!"]);
}
?>