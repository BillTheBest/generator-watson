'use strict';

//////////////////////////////
// Variables
//////////////////////////////
var gulp = require('gulp');

//////////////////////////////
// Sass Tasks
//////////////////////////////
require('./tasks/sass')(gulp);


//////////////////////////////
// Deploy Tasks
//////////////////////////////
require('./tasks/deploy')(gulp);


//////////////////////////////
// ESLint Tasks
//////////////////////////////
require('./tasks/eslint')(gulp);
