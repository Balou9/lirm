# lirm

[![build status](http://img.shields.io/travis/balou9/lirm.svg?style=flat)](http://travis-ci.org/balou9/lirm) [![AppVeyor Build Status](https://ci.appveyor.com/api/projects/status/github/balou9/lirm?branch=master&svg=true)](https://ci.appveyor.com/project/balou9/lirm)

***

Fitting linear regression models using least square method

***

## Get it!

```js
npm install --save lirm
```

***

## Usage

```js
var lirm = require('lirm')
var x = [1, 2, 3, 4, 5]
var y = [2, 4, 5, 4, 5]

console.log(lirm(x, y, 1))
```

***

## API

### `lirm(x, y, user_x)`

Enter independent and dependent variable to calculate regressions y-hat.  

***

## License

[MIT](./license.md)
