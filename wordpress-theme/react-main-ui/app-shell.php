<?php
/**
 * Single shell for the React app. Used by index.php and catch-all.
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="icon" type="image/jpeg" href="https://symposia.us/wp-content/uploads/2025/04/cropped-Community-Bookstore.jpg">
	<title><?php wp_title( '|', true, 'right' ); bloginfo( 'name' ); ?></title>
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<div id="root"></div>
<?php wp_footer(); ?>
</body>
</html>
