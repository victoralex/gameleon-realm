<?php
# In PHP 5.2 or higher we don't need to bring this in
if (!function_exists('json_encode')) {
	require_once 'includes/facebookApi/jsonwrapper/jsonwrapper_inner.php';
} 
?>
