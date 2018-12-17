# Gulpfile
[![npm version](https://img.shields.io/npm/v/primer.svg)](https://www.npmjs.org/package/primer)
[![Build Status](https://travis-ci.org/primer/primer.svg?branch=master)](https://travis-ci.org/primer/primer)

## Description
Gulp default actions are:
- Compile ECMAScript, SCSS (or Stylus) and Jade
- Minify Images, HTML, CSS and JS
- Concatenate and add auto-prefixer to CSS and JS

## Installation
```sh
yarn install
```

## Run
```sh
gulp
```

## Minimize Images
```sh
gulp image
```


## Core Packages

| Package | Version |
|---|---|
| **gulp**  | [![npm version](https://img.shields.io/npm/v/gulp.svg)](https://www.npmjs.org/package/gulp) |
| gulp-autoprefixer | [![npm version](https://img.shields.io/npm/v/gulp-autoprefixer.svg)](https://www.npmjs.org/package/gulp-autoprefixer) |
| gulp-babel | [![npm version](https://img.shields.io/npm/v/gulp-babel.svg)](https://www.npmjs.org/package/gulp-babel) |
| gulp-cache | [![npm version](https://img.shields.io/npm/v/gulp-cache.svg)](https://www.npmjs.org/package/gulp-cache) |
| gulp-clean-css | [![npm version](https://img.shields.io/npm/v/gulp-clean-css.svg)](https://www.npmjs.org/package/gulp-clean-css) |
| gulp-concat | [![npm version](https://img.shields.io/npm/v/gulp-concat.svg)](https://www.npmjs.org/package/gulp-concat) |
| gulp-csscomb | [![npm version](https://img.shields.io/npm/v/gulp-csscomb.svg)](https://www.npmjs.org/package/gulp-csscomb) |
| gulp-imagemin | [![npm version](https://img.shields.io/npm/v/gulp-imagemin.svg)](https://www.npmjs.org/package/gulp-imagemin) |
| gulp-jade | [![npm version](https://img.shields.io/npm/v/gulp-jade.svg)](https://www.npmjs.org/package/gulp-jade) |
| gulp-merge-media-queries | [![npm version](https://img.shields.io/npm/v/gulp-merge-media-queries.svg)](https://www.npmjs.org/package/gulp-merge-media-queries) |
| gulp-minify-html | [![npm version](https://img.shields.io/npm/v/gulp-minify-html.svg)](https://www.npmjs.org/package/gulp-minify-html) |
| gulp-plumber | [![npm version](https://img.shields.io/npm/v/gulp-plumber.svg)](https://www.npmjs.org/package/gulp-plumber) |
| gulp-rename | [![npm version](https://img.shields.io/npm/v/gulp-rename.svg)](https://www.npmjs.org/package/gulp-rename) |
| gulp-sass | [![npm version](https://img.shields.io/npm/v/gulp-sass.svg)](https://www.npmjs.org/package/gulp-sass) |
| gulp-uglify | [![npm version](https://img.shields.io/npm/v/gulp-uglify.svg)](https://www.npmjs.org/package/gulp-uglify) |
| **@babel/core** | [![npm version](https://img.shields.io/npm/v/@babel/core.svg)](https://www.npmjs.org/package/@babel/core) |
| @babel/preset-env | [![npm version](https://img.shields.io/npm/v/@babel/preset-env.svg)](https://www.npmjs.org/package/@babel/preset-env) |
| babel-polyfill | [![npm version](https://img.shields.io/npm/v/babel-polyfill.svg)](https://www.npmjs.org/package/babel-polyfill) |
| babel-preset-env | [![npm version](https://img.shields.io/npm/v/babel-preset-env.svg)](https://www.npmjs.org/package/babel-preset-env) |
| es6-promise | [![npm version](https://img.shields.io/npm/v/es6-promise.svg)](https://www.npmjs.org/package/es6-promise) |

## Structure

```sh
├── app
│   ├── public 
|   │   ├── imgs # Optimized images
│   │   ├── js
│   │   │   ├── main.js
│   │   │   └── main.min.js
│   │   ├── styles
│   │   │   ├── main.css
│   │   │   └── main.min.css
│   │   └── index.html
│   └── src
│       ├── imgs # Raw images directory
│       ├── js # Write ES6
│       │   ├── index.es6.js
│       │   └── other.es6.js
│       ├── layouts # Write layouts in Jade
│       │   ├── layout.jade
│       │   └── other.jade
│       ├── styles # Write Sass to CSS 
│       │   ├── master.scss
│       │   └── other.scss
│       └── index.jade # Write Jade to HTML
├── gulpfile.js
└── package.json
```
