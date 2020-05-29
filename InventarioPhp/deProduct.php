<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connection.php';
$data = json_decode(file_get_contents("php://input"));
if(isset($data->id) && is_numeric($data->id)){
    $delID = $data->id;
    $query = "DELETE FROM users WHERE id='$delID'";
    $delete = mysqli_query($db_conn, $query);
    if($delete){
        echo json_encode(["success"=>1,"msg"=>"Producto eliminado"]);
    }
    else{
        echo json_encode(["success"=>0,"msg"=>"Producto no se pudo eliminar!"]);
    }
}
else{
    echo json_encode(["success"=>0,"msg"=>"Producto no encontrado!"]);
}
?>