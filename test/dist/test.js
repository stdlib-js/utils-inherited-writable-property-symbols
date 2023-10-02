/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var indexOf = require( '@stdlib/utils-index-of' );
var defineProperty = require( '@stdlib/utils-define-property' );
var inherit = require( '@stdlib/utils-inherit' );
var hasSymbolSupport = require( '@stdlib/assert-has-symbol-support' );
var Symbol = require( '@stdlib/symbol-ctor' );
var inheritedWritablePropertySymbols = require( './../../dist' ); // eslint-disable-line id-length


// VARIABLES //

var hasSymbols = hasSymbolSupport();


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof inheritedWritablePropertySymbols, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a positive integer for the inheritance level', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
		0,
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			inheritedWritablePropertySymbols( {}, value );
		};
	}
});

tape( 'the function returns an array of an object\'s inherited writable symbol properties', function test( t ) {
	var expected;
	var actual;
	var syms;
	var obj;
	var idx;
	var i;

	if ( hasSymbols ) {
		syms = [
			Symbol( 'a' ),
			Symbol( 'b' ),
			Symbol( 'c' ),
			Symbol( 'd' )
		];
	} else {
		syms = [];
	}

	function Foo() {
		this.a = 'a';
		defineProperty( this, 'b', {
			'configurable': false,
			'enumerable': false,
			'writable': true,
			'value': 'b'
		});
		if ( hasSymbols ) {
			this[ syms[ 0 ] ] = 'a';
			defineProperty( this, syms[ 1 ], {
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
		Foo.prototype[ syms[ 2 ] ] = 'c';
		defineProperty( Foo.prototype, syms[ 3 ], {
			'configurable': false,
			'enumerable': false,
			'writable': false,
			'value': 'd'
		});
	}

	obj = new Foo();

	if ( hasSymbols ) {
		expected = [ syms[ 2 ] ];
	} else {
		expected = [];
	}
	actual = inheritedWritablePropertySymbols( obj );

	t.strictEqual( actual.length >= expected.length, true, 'has expected length' );
	for ( i = 0; i < expected.length; i++ ) {
		idx = indexOf( actual, expected[ i ] );
		t.strictEqual( idx !== -1, true, 'contains property: '+expected[i].toString() );
	}
	t.end();
});

tape( 'the function returns an array of an object\'s inherited writable symbol properties (multiple inheritance)', function test( t ) {
	var expected;
	var actual;
	var syms;
	var obj;
	var idx;
	var i;

	if ( hasSymbols ) {
		syms = [
			Symbol( 'a' ),
			Symbol( 'b' ),
			Symbol( 'c' ),
			Symbol( 'd' ),
			Symbol( 'e' ),
			Symbol( 'f' )
		];
	} else {
		syms = [];
	}

	function Bar() {
		this.a = 'a';
		if ( hasSymbols ) {
			this[ syms[ 0 ] ] = 'a';
		}
		return this;
	}

	Bar.prototype.c = 'c';
	Bar.prototype.d = 'd';
	defineProperty( Bar.prototype, 'e', {
		'configurable': false,
		'enumerable': false,
		'writable': false,
		'value': 'e'
	});
	if ( hasSymbols ) {
		defineProperty( Bar.prototype, syms[ 2 ], {
			'configurable': true,
			'enumerable': false,
			'writable': true,
			'value': 'c'
		});
		defineProperty( Bar.prototype, syms[ 3 ], {
			'configurable': true,
			'enumerable': false,
			'writable': true,
			'value': 'd'
		});
		defineProperty( Bar.prototype, syms[ 4 ], {
			'configurable': false,
			'enumerable': false,
			'writable': true,
			'value': 'e'
		});
	}

	function Foo() {
		Bar.call( this );
		this.a = 'a';
		defineProperty( this, 'b', {
			'configurable': false,
			'enumerable': false,
			'writable': true,
			'value': 'b'
		});
		if ( hasSymbols ) {
			defineProperty( this, syms[ 1 ], {
				'configurable': false,
				'enumerable': false,
				'writable': true,
				'value': 'b'
			});
		}
		return this;
	}

	inherit( Foo, Bar );

	Foo.prototype.c = 'c';
	defineProperty( Foo.prototype, 'f', {
		'configurable': false,
		'enumerable': false,
		'writable': false,
		'value': 'f'
	});
	if ( hasSymbols ) {
		defineProperty( Foo.prototype, syms[ 2 ], {
			'configurable': true,
			'enumerable': true,
			'writable': false,
			'value': 'c'
		});
		defineProperty( Foo.prototype, syms[ 3 ], {
			'configurable': true,
			'enumerable': false,
			'writable': true,
			'value': 'd'
		});
		defineProperty( Foo.prototype, syms[ 5 ], {
			'configurable': false,
			'enumerable': false,
			'writable': true,
			'value': 'f'
		});
	}

	obj = new Foo();

	if ( hasSymbols ) {
		expected = [ syms[ 3 ], syms[ 4 ], syms[ 5 ] ];
	} else {
		expected = [];
	}
	actual = inheritedWritablePropertySymbols( obj );

	t.strictEqual( actual.length >= expected.length, true, 'has expected length' );
	for ( i = 0; i < expected.length; i++ ) {
		idx = indexOf( actual, expected[ i ] );
		t.strictEqual( idx !== -1, true, 'contains property: '+expected[i].toString() );
	}
	if ( hasSymbols ) {
		idx = indexOf( actual, syms[ 2 ] );
		t.strictEqual( idx, -1, 'does not contain property' );
	}
	t.end();
});

tape( 'the function supports limiting the inheritance level', function test( t ) {
	var expected;
	var actual;
	var syms;
	var obj;
	var idx;
	var i;

	if ( hasSymbols ) {
		syms = [
			Symbol( 'a' ),
			Symbol( 'b' ),
			Symbol( 'c' ),
			Symbol( 'd' ),
			Symbol( 'e' ),
			Symbol( 'f' )
		];
	} else {
		syms = [];
	}

	function Bar() {
		this.a = 'a';
		if ( hasSymbols ) {
			this[ syms[ 0 ] ] = 'a';
		}
		return this;
	}

	Bar.prototype.c = 'c';
	defineProperty( Bar.prototype, 'd', {
		'configurable': false,
		'enumerable': false,
		'writable': false,
		'value': 'd'
	});
	if ( hasSymbols ) {
		Bar.prototype[ syms[ 5 ] ] = 'c';
		defineProperty( Bar.prototype, syms[ 3 ], {
			'configurable': false,
			'enumerable': false,
			'writable': false,
			'value': 'd'
		});
	}

	function Foo() {
		Bar.call( this );
		this.a = 'a';
		defineProperty( this, 'b', {
			'configurable': false,
			'enumerable': false,
			'writable': true,
			'value': 'b'
		});
		if ( hasSymbols ) {
			defineProperty( this, syms[ 1 ], {
				'configurable': false,
				'enumerable': false,
				'writable': true,
				'value': 'b'
			});
		}
		return this;
	}

	inherit( Foo, Bar );

	Foo.prototype.c = 'c';
	defineProperty( Foo.prototype, 'e', {
		'configurable': false,
		'enumerable': false,
		'writable': false,
		'value': 'e'
	});
	if ( hasSymbols ) {
		Foo.prototype[ syms[ 2 ] ] = 'c';
		defineProperty( Foo.prototype, syms[ 4 ], {
			'configurable': false,
			'enumerable': false,
			'writable': false,
			'value': 'e'
		});
	}

	obj = new Foo();

	if ( hasSymbols ) {
		expected = [ syms[ 2 ] ];
	} else {
		expected = [];
	}
	actual = inheritedWritablePropertySymbols( obj, 1 );

	t.strictEqual( actual.length >= expected.length, true, 'has expected length' );
	for ( i = 0; i < expected.length; i++ ) {
		idx = indexOf( actual, expected[ i ] );
		t.strictEqual( idx !== -1, true, 'contains property: '+expected[i].toString() );
	}
	if ( hasSymbols ) {
		idx = indexOf( actual, syms[ 5 ] );
		t.strictEqual( idx === -1, true, 'does not contain property' );
	}
	t.end();
});

tape( 'the function returns an empty array if provided `null` or `undefined`', function test( t ) {
	var expected;
	var actual;
	var values;
	var i;

	values = [
		void 0,
		null
	];
	expected = [];

	for ( i = 0; i < values.length; i++ ) {
		actual = inheritedWritablePropertySymbols( values[ i ] );
		t.deepEqual( actual, expected, 'returns expected value when provided '+values[ i ] );
	}
	t.end();
});
