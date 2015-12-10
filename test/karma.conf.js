// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html
// Generated on 2015-12-09 using
// generator-karma 1.0.1

module.exports = function(config) {
  'use strict';

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // base path, that will be used to resolve files and exclude
    basePath: '../',

    // testing framework to use (jasmine/mocha/qunit/...)
    // as well as any additional frameworks (requirejs/chai/sinon/...)
    frameworks: [
      "jasmine"
    ],

    // list of files / patterns to load in the browser
    files: [
      // bower:js
      'bower_components/jquery/dist/jquery.js',
      'bower_components/angular/angular.js',
      'bower_components/bootstrap/dist/js/bootstrap.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-cookies/angular-cookies.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-sanitize/angular-sanitize.js',
      'bower_components/angular-touch/angular-touch.js',
      'bower_components/perfect-scrollbar/src/perfect-scrollbar.js',
      'bower_components/angular-perfect-scrollbar/src/angular-perfect-scrollbar.js',
      'bower_components/fastclick/lib/fastclick.js',
      'bower_components/jquery-countTo/jquery.countTo.js',
      'bower_components/onScreen/jquery.onscreen.js',
      'bower_components/jquery.maskedinput/dist/jquery.maskedinput.js',
      'bower_components/intl-tel-input/build/js/intlTelInput.min.js',
      'bower_components/intl-tel-input/lib/libphonenumber/build/utils.js',
      'bower_components/moment/moment.js',
      'bower_components/bootstrap-daterangepicker/daterangepicker.js',
      'bower_components/bootstrap-datepicker/js/bootstrap-datepicker.js',
      'bower_components/autotype/index.js',
      'bower_components/bootstrap-timepicker/js/bootstrap-timepicker.min.js',
      'bower_components/dropzone/dist/min/dropzone.min.js',
      'bower_components/clockpicker/dist/jquery-clockpicker.js',
      'bower_components/mjolnic-bootstrap-colorpicker/dist/js/bootstrap-colorpicker.js',
      'bower_components/jquery-validation/dist/jquery.validate.js',
      'bower_components/angular-mocks/angular-mocks.js',
      // endbower
      "app/scripts/**/*.js",
      "test/mock/**/*.js",
      "test/spec/**/*.js"
    ],

    // list of files / patterns to exclude
    exclude: [
    ],

    // web server port
    port: 8080,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
      "PhantomJS"
    ],

    // Which plugins to enable
    plugins: [
      "karma-phantomjs-launcher",
      "karma-jasmine"
    ],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'
  });
};
