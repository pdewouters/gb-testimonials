<?php
/**
 * Block Registration.
 */

namespace GB_Testimonials;

function register_block() {
	wp_register_script(
		'gb-testimonials',
		plugins_url( 'build/index.js', FILE ),
		[ 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ],
		filemtime( plugin_dir_path( FILE ) . 'build/index.js' )
	);

	wp_register_style(
		'gb-testimonials-editor',
		plugins_url( 'assets/editor.css', FILE ),
		[ 'wp-edit-blocks' ],
		filemtime( plugin_dir_path( FILE ) . 'assets/editor.css' )
	);

	wp_register_style(
		'gb-testimonials',
		plugins_url( 'assets/style.css', FILE ),
		[],
		filemtime( plugin_dir_path( FILE ) . 'assets/style.css' )
	);

	register_block_type( 'hm/gb-testimonials', [
		'editor_script' => 'gb-testimonials',
		'editor_style'  => 'gb-testimonials-editor',
		'style'         => 'gb-testimonials',
	] );
}

function bootstrap() {
	add_action( 'init', __NAMESPACE__ . '\\register_block' );
}
