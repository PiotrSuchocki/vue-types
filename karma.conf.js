// Karma configuration
// Generated on Wed Oct 26 2016 17:54:27 GMT+0200 (CEST)

const path = require('path');

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],

    // list of files / patterns to load in the browser
    files: [
      'node_modules/babel-polyfill/browser.js',
      'src/**/*.js',
      'test/**/*.spec.js'
    ],

    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      // add webpack as preprocessor
      'src/**/*.js': ['webpack', 'sourcemap'],
      'test/**/*.spec.js': ['webpack', 'sourcemap']
    },

    webpack: {
      module: {
        rules: [
          {
            test: /\.js$/,
            include: [
              path.join(process.cwd(), 'src'),
              path.join(process.cwd(), 'test')
            ],
            use: [
              'babel'
            ]
          }
        ]
      }
    },

    webpackMiddleware: {
      noInfo: true,
      stats: 'errors-only'
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    //autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    //browsers: ['PhantomJS', 'Chrome', 'Firefox', 'IE', 'Safari', 'Opera'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    //singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}