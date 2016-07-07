/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
var map = {
    'd3': 'vendor/d3/d3.js',
    'firebase': 'vendor/firebase/firebase.js',
    'angularfire2': 'vendor/angularfire2',
    '@ngrx': 'vendor/@ngrx'
};
/** User packages configuration. */
var packages = {
    angularfire2: {
        defaultExtension: 'js',
        main: 'angularfire2.js'
    },
    '@ngrx/core': {
        main: 'index.js',
        format: 'cjs'
    },
    '@ngrx/store': {
        main: 'index.js',
        format: 'cjs'
    }
};
////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
var barrels = [
    // Angular specific barrels.
    '@angular/core', '@angular/common', '@angular/compiler', '@angular/http', '@angular/router',
    '@angular/platform-browser', '@angular/platform-browser-dynamic', '@ngrx/devtools',
    // Thirdparty barrels.
    'rxjs',
    // App specific barrels.
    'app', 'app/shared', 'app/sidebar', 'app/header', 'app/item-container', 'app/main-container',
];
var cliSystemConfigPackages = {};
barrels.forEach(function (barrelName) { cliSystemConfigPackages[barrelName] = { main: 'index' }; });
// Apply the CLI SystemJS configuration.
System.config({
    map: { '@angular': 'vendor/@angular', 'rxjs': 'vendor/rxjs', 'main': 'main.js' },
    packages: cliSystemConfigPackages
});
// Apply the user's configuration.
System.config({ map: map, packages: packages });
//# sourceMappingURL=../system-config.js.map