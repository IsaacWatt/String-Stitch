# string-stitch

A clean interface for JS string interpolation

## Install

```
$ npm i string-stitch
```

## Usage
Currently - stringstitch supports the ability to embed objects into template strings!
```js
const Stitcher = require("string-stitch");

const template = "Hello ${name}"; 
const args = {
  name: "iwatt",
}

const myStitch = new Stitcher(template, args);

console.log(myStitch.embed()); // "Hello iwatt" 
```
