<?php 
    require_once '../config/connect.php';

    $res = [
        'username' => 'admin',
        'password' => '123123213',
    ];

    echo json_encode($res);
    return $res;
?>