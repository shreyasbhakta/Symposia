<?php
/**
 * 404 template – serve React app with 200 so SPA routes (e.g. /events, /about) work.
 * The catch-all in functions.php handles this; this file is a fallback.
 */
status_header( 200 );
include get_template_directory() . '/app-shell.php';
