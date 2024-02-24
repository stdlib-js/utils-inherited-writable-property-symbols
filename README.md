<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# inheritedWritablePropertySymbols

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return an array of an object's inherited writable [symbol][@stdlib/symbol/ctor] properties.



<section class="usage">

## Usage

<!-- eslint-disable id-length -->

To use in Observable,

```javascript
inheritedWritablePropertySymbols = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-inherited-writable-property-symbols@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var inheritedWritablePropertySymbols = require( 'path/to/vendor/umd/utils-inherited-writable-property-symbols/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/utils-inherited-writable-property-symbols@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.inheritedWritablePropertySymbols;
})();
</script>
```

#### inheritedWritablePropertySymbols( obj\[, level] )

Returns an `array` of an object's inherited writable [symbol][@stdlib/symbol/ctor] properties.

<!-- eslint-disable id-length -->

```javascript
var defineProperty = require( '@stdlib/utils-define-property' );
var hasSymbolSupport = require( '@stdlib/assert-has-symbol-support' );
var Symbol = require( '@stdlib/symbol-ctor' );

var hasSymbols = hasSymbolSupport();
var symbols;
var f;

function Foo() {
    if ( hasSymbols ) {
        defineProperty( this, Symbol( 'a' ), {
            'configurable': false,
            'enumerable': false,
            'writable': true,
            'value': 'a'
        });
    }
    return this;
}

if ( hasSymbols ) {
    defineProperty( Foo.prototype, Symbol( 'b' ), {
        'configurable': false,
        'enumerable': false,
        'writable': true,
        'value': 'b'
    });
}

f = new Foo();
symbols = inheritedWritablePropertySymbols( f );
```

By default, the function walks an object's entire prototype chain. To limit the inheritance level, provide a `level` argument.

<!-- eslint-disable id-length -->

```javascript
var symbols = inheritedWritablePropertySymbols( [], 1 );
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Property order is not guaranteed, as `object` property enumeration is not specified according to the [ECMAScript specification][ecma-262-for-in]. In practice, however, most engines use insertion order to sort an `object`'s properties, thus allowing for deterministic extraction.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable id-length -->

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-property@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-symbol-support@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/symbol-ctor@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/utils-inherited-writable-property-symbols@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var hasSymbols = hasSymbolSupport();
var symbols;
var obj;

function Foo() {
    this.a = 'a';
    defineProperty( this, 'b', {
        'configurable': false,
        'enumerable': false,
        'writable': false,
        'value': 'b'
    });
    if ( hasSymbols ) {
        this[ Symbol( 'a' ) ] = 'a';
        defineProperty( this, Symbol( 'b' ), {
            'configurable': false,
            'enumerable': false,
            'writable': false,
            'value': 'b'
        });
    }
    return this;
}

Foo.prototype.c = 'c';
defineProperty( Foo.prototype, 'd', {
    'configurable': false,
    'enumerable': false,
    'writable': false,
    'value': 'd'
});
if ( hasSymbols ) {
    Foo.prototype[ Symbol( 'c' ) ] = 'c';
    defineProperty( Foo.prototype, Symbol( 'd' ), {
        'configurable': false,
        'enumerable': false,
        'writable': false,
        'value': 'd'
    });
}

obj = new Foo();
symbols = inheritedWritablePropertySymbols( obj );

console.log( symbols );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils-inherited-writable-property-names`][@stdlib/utils/inherited-writable-property-names]</span><span class="delimiter">: </span><span class="description">return an array of an object's inherited writable property names.</span>
-   <span class="package-name">[`@stdlib/utils-writable-property-symbols`][@stdlib/utils/writable-property-symbols]</span><span class="delimiter">: </span><span class="description">return an array of an object's own writable symbol properties.</span>
-   <span class="package-name">[`@stdlib/utils-writable-property-symbols-in`][@stdlib/utils/writable-property-symbols-in]</span><span class="delimiter">: </span><span class="description">return an array of an object's own and inherited writable symbol properties.</span>
-   <span class="package-name">[`@stdlib/utils-properties`][@stdlib/utils/properties]</span><span class="delimiter">: </span><span class="description">return an array of an object's own enumerable and non-enumerable property names and symbols.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-inherited-writable-property-symbols.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-inherited-writable-property-symbols

[test-image]: https://github.com/stdlib-js/utils-inherited-writable-property-symbols/actions/workflows/test.yml/badge.svg?branch=v0.2.1
[test-url]: https://github.com/stdlib-js/utils-inherited-writable-property-symbols/actions/workflows/test.yml?query=branch:v0.2.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-inherited-writable-property-symbols/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-inherited-writable-property-symbols?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-inherited-writable-property-symbols.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-inherited-writable-property-symbols/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-inherited-writable-property-symbols/tree/deno
[deno-readme]: https://github.com/stdlib-js/utils-inherited-writable-property-symbols/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/utils-inherited-writable-property-symbols/tree/umd
[umd-readme]: https://github.com/stdlib-js/utils-inherited-writable-property-symbols/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/utils-inherited-writable-property-symbols/tree/esm
[esm-readme]: https://github.com/stdlib-js/utils-inherited-writable-property-symbols/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/utils-inherited-writable-property-symbols/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-inherited-writable-property-symbols/main/LICENSE

[ecma-262-for-in]: https://262.ecma-international.org/5.1/#sec-12.6.4

[@stdlib/symbol/ctor]: https://github.com/stdlib-js/symbol-ctor/tree/umd

<!-- <related-links> -->

[@stdlib/utils/inherited-writable-property-names]: https://github.com/stdlib-js/utils-inherited-writable-property-names/tree/umd

[@stdlib/utils/writable-property-symbols]: https://github.com/stdlib-js/utils-writable-property-symbols/tree/umd

[@stdlib/utils/writable-property-symbols-in]: https://github.com/stdlib-js/utils-writable-property-symbols-in/tree/umd

[@stdlib/utils/properties]: https://github.com/stdlib-js/utils-properties/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
