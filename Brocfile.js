var merge = require('broccoli-merge-trees');
var compileSass = require('broccoli-sass');

var includePaths = [
    'styles',
    'bower_components/reset-css',
    'bower_components/fontawesome/scss',
];

var appCss = compileSass(includePaths, 'app.scss', 'app.css');

module.exports = merge(['public', 'bower_components', appCss]);
