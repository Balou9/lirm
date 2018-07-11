# lirm

[![build status](http://img.shields.io/travis/Balou9/lirm.svg?style=flat)](http://travis-ci.org/Balou9/lirm) [![AppVeyor Build Status](https://ci.appveyor.com/api/projects/status/github/Balou9/lirm?branch=master&svg=true)](https://ci.appveyor.com/project/Balou9/lirm)

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

lirm(x, y, 1, function (err, data) {
  if (err) throw err
  return data
})
```

***

## API

### `lirm(x, y, predictor)`

Enter independent x and dependent y variable plus predictor to calculate response.  

***

## License

[MIT](./license.md)
