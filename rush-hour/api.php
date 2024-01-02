<?php

// stole this do disable caching
// this is important because this is an api
header_remove('ETag');
header_remove('Pragma');
header_remove('Cache-Control');
header_remove('Last-Modified');
header_remove('Expires');
header('Expires: Thu, 1 Jan 1970 00:00:00 GMT');
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
header('Cache-Control: post-check=0, pre-check=0',false);
header('Pragma: no-cache');

function handleRequest() {

    $status = "Success!";
    $status_code = 200;

    // load sql credentials from non-public ini
    $config = parse_ini_file("../../.env", true);
    if(empty($config["rush-hour"])) {
        $status = "Missing or invalid configuration";
        $status_code = 500;
    }
    $rushhour = $config["rush-hour"];
    if(empty($rushhour["user"]) || empty($rushhour["pass"])) {
        $status = "Missing sql username or password";
        $status_code = 500;
    }
    $user = $rushhour["user"];
    $pass = $rushhour["pass"];

    echo """
    {
        \"status\": \"$status!\",
        \"code\": $status_code
    }
    """;
    return 200;
}

http_response_code(handleRequest());

?>