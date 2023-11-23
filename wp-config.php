<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'aphsoftware' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         ' IOMx-}bkW%&XZr~HM9C~N%hDEMU+>ot?/dDm?}^rb/virjr?mDs,c!VJiSei355' );
define( 'SECURE_AUTH_KEY',  'dnb-;X{R$JvaA@2+5~wVah_wAwJ[@66@L]F(/at%!/v+ vvGH>f2W*mv+I$`;%s(' );
define( 'LOGGED_IN_KEY',    's3iES5*JzM:04[1,.:-hCKdc(_YN^z!*RiB&guFWjhEmzVl@k>oqC+c/anb(d5V)' );
define( 'NONCE_KEY',        'B8Y lDH({cUP oNAPA_4z#3Hu C^xKW6t~^#Kqk#L(C?z[dAV/|SqdT(V9.+CWv:' );
define( 'AUTH_SALT',        '%*jf.DwrE~EZfj{j.&~(&Kl:)ZA0s_830BwTmU8LG:1X8m{#`F[G$;WSAFA~DQNS' );
define( 'SECURE_AUTH_SALT', '9`GvEL)Q=%qed!qp;~~sQy)Du,#NCe1,Fi{Tdwk XLHZnEn`qpgVdfpdZa{[E1 V' );
define( 'LOGGED_IN_SALT',   'y]+;a/ong!aM[G.Hi+F7<BZKv|@/bXi+i?Gm;BoBbAnH*USJX /jfIa{uM$I0iJt' );
define( 'NONCE_SALT',       '7_]DrQgMk?r*3bUuG66{md1 7ZR7qY:5nk^]U*e[`MTYcp>cK2SqF7h{y9mY:DXu' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
