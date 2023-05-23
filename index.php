<?php
    $actual_link = "https://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]/home";
    header('Location: $actual_link');
?>