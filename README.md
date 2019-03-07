# reqdef

**reqdef** is a small utility to help require a module that may be using `export default` in a CommonJS environment.

```js
$ npm install --save reqdef
```

<img src="https://user-images.githubusercontent.com/13259/53932809-23509600-4061-11e9-9302-a238b26b07d0.png" align="center" />

Instead of using this:

```js
const { default: myFunction } = require('./myFunction');
// ...or...
const myFunction = require('./myFunction').default;
```

You can do this:

```js
const myFunction = require('reqdef')(require('./myFunction'));
```

**reqdef** also supports passing a module name:

```js
const myFunction = require('reqdef')('my-function-on-in-packagejson');
```

## Prior Art

- <https://github.com/mattinsler/es6require>
- <https://github.com/SuperPaintman/require-default>
- <https://github.com/unlight/rdef>

## License

The MIT License (MIT)

Copyright (c) 2019 John Flesch <john@fles.ch> (https://github.com/flesch)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

<p align="center"><br /><sup>🐶 Made with <a href="https://www.instagram.com/murphythebeast/">a 7lb chiweenie</a> on my lap — near Chicago, IL</sup></p>
