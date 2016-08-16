/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
  'd3': 'vendor/d3/d3.js',
  'firebase': 'vendor/firebase/firebase.js',
  'angularfire2': 'vendor/angularfire2',
  '@ngrx': 'vendor/@ngrx',
  'ng-semantic': 'vendor/ng-semantic'
};

/** User packages configuration. */
const packages: any = {
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
  },
  '@ngrx/effects': {
    main: 'index.js',
    format: 'cjs'
  },
  '@ngrx/store-devtools': {
    main: 'index.js',
    format: 'cjs'
  },
  '@ngrx/store-log-monitor': {
    main: 'index.js',
    format: 'cjs'
  },
  'ng-semantic': {
    main: 'ng-semantic.js', defaultExtension: 'js'
  }
};


////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core', '@angular/common', '@angular/compiler', '@angular/http', '@angular/router',
  '@angular/platform-browser', '@angular/platform-browser-dynamic','@angular/forms',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app', 'app/shared', 'app/sidebar', 'app/header', 'app/item-container', 'app/main-container',
  'app/modal',
  'app/item-wizard',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => { cliSystemConfigPackages[barrelName] = { main: 'index' }; });

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: { '@angular': 'vendor/@angular', 'rxjs': 'vendor/rxjs', 'main': 'main.js' },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
