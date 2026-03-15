<?php
/**
 * React Main UI theme – enqueue React build and catch-all for SPA routing.
 */

// Enqueue React app assets (scan theme /assets for built .js and .css)
function react_main_ui_enqueue_assets() {
	$theme_dir  = get_template_directory();
	$theme_uri  = get_template_directory_uri();
	$assets_dir = $theme_dir . '/assets';

	if ( ! is_dir( $assets_dir ) ) {
		return;
	}

	$js_files  = glob( $assets_dir . '/*.js' );
	$css_files = glob( $assets_dir . '/*.css' );

	if ( ! empty( $js_files ) ) {
		$js_basename = basename( $js_files[0] );
		wp_enqueue_script(
			'symposia-react',
			$theme_uri . '/assets/' . $js_basename,
			array(),
			null,
			true
		);
	}

	if ( ! empty( $css_files ) ) {
		$css_basename = basename( $css_files[0] );
		wp_enqueue_style(
			'symposia-react',
			$theme_uri . '/assets/' . $css_basename,
			array(),
			null
		);
	}
}
add_action( 'wp_enqueue_scripts', 'react_main_ui_enqueue_assets' );

/**
 * Catch-all: serve React app for any front-end URL so BrowserRouter works.
 * Exclude wp-admin, wp-json, wp-content, wp-includes, and feed/rest.
 */
function react_main_ui_catch_all_template() {
	if ( is_admin() ) {
		return;
	}
	$uri = isset( $_SERVER['REQUEST_URI'] ) ? $_SERVER['REQUEST_URI'] : '';
	$skip = array( '/wp-json', '/wp-admin', '/wp-content', '/wp-includes', '/wp-login' );
	foreach ( $skip as $path ) {
		if ( strpos( $uri, $path ) !== false ) {
			return;
		}
	}
	// Serve 200 and React app for everything else (SPA routes like /events, /about)
	status_header( 200 );
	include get_template_directory() . '/app-shell.php';
	exit;
}
add_action( 'template_redirect', 'react_main_ui_catch_all_template', 1 );
