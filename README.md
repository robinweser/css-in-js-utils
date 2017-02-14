# CSS-in-JS Utilities
A library that provides useful utilities functions for CSS-in-JS solutions.<br>
They are intended to be used by CSS-in-JS library authors rather used directly.
<br>

<img alt="TravisCI" src="https://travis-ci.org/rofrischmann/css-in-js-utils.svg?branch=master">
<a href="https://codeclimate.com/github/rofrischmann/css-in-js-utils/coverage"><img alt="Test Coverage" src="https://codeclimate.com/github/rofrischmann/css-in-js-utils/badges/coverage.svg"></a>
<img alt="npm downloads" src="https://img.shields.io/npm/dm/css-in-js-utils.svg">
<img alt="npm version" src="https://badge.fury.io/js/css-in-js-utils.svg">

## Installation
```sh
yarn add css-in-js-utils
```

## Why?
By now I have authored and collaborated on many different libraries and found I would rewrite the very same utility functions every time. That's why this repository is hosting small utilities especially built for CSS-in-JS solutions and tools. Even if there are tons of different libraries already, they all basically use the same mechanisms and utilities.

## Utilities
* [`camelCaseProperty(property)`](#camelcasepropertyproperty)
* [`hyphenateProperty(property)`](#hyphenatepropertyproperty)
* [`isPrefixedProperty(property)`](#isprefixedpropertyproperty)
* [`isPrefixedValue(value)`](#isprefixedvaluevalue)
* [`isUnitlessProperty(property)`](#isunitlessproperty)
* [`normalizeProperty(property)`](#normalizepropertyproperty)
* [`unprefixProperty(property)`](#unprefixpropertyproperty)
* [`unprefixValue(value)`](#unprefixvaluevalue)

------

### `camelCaseProperty(property)`
Converts the `property` to camelCase.

```javascript
import { camelCaseProperty } from 'css-in-js-utils'

console.log(camelCaseProperty('padding-top'))
// => 'paddingTop'

console.log(camelCaseProperty('-webkit-transition'))
// => 'WebkitTransition'
```

------

### `hyphenateProperty(property)`
Converts the `property` to hyphen-case.
> Directly mirrors [hyphenate-style-name](https://github.com/rexxars/hyphenate-style-name).

```javascript
import { hyphenateProperty } from 'css-in-js-utils'

console.log(hyphenateProperty('paddingTop'))
// => 'padding-top'

console.log(hyphenateProperty('WebkitTransition'))
// => '-webkit-transition'
```

------

### `isPrefixedProperty(property)`
Checks if a `property` includes a vendor prefix.

```javascript
import { isPrefixedProperty } from 'css-in-js-utils'

console.log(isPrefixedProperty('paddingTop'))
// => false

console.log(isPrefixedProperty('WebkitTransition'))
// => true
```

------
### `isPrefixedValue(value)`
Checks if a `value` includes vendor prefixes.

```javascript
import { isPrefixedValue } from 'css-in-js-utils'

console.log(isPrefixedValue('200px'))
console.log(isPrefixedValue(200))
// => false

console.log(isPrefixedValue('-webkit-calc(100% - 50px)'))
// => true
```

------

### `isUnitlessProperty(property)`
Checks if a `property` accepts unitless values.
> Directly mirrors [unitless-css-property](https://github.com/rofrischmann/unitless-css-property).

```javascript
import { isUnitlessProperty } from 'css-in-js-utils'

console.log(isUnitlessProperty('width'))
// => false

console.log(isUnitlessProperty('flexGrow'))
console.log(isUnitlessProperty('lineHeight'))
// => true
```

------

### `normalizeProperty(property)`
Normalizes the `property` by unprefixing **and** camelCasing it.
> Uses the [`camelCaseProperty`](#camelcasepropertyproperty) and [`unprefixProperty`](#unprefixpropertyproperty)-methods.

```javascript
import { normalizeProperty } from 'css-in-js-utils'

console.log(normalizeProperty('-webkit-transition-delay'))
// => 'transitionDelay'
```

------

### `unprefixProperty(property)`
Removes the vendor prefix (if set) from the `property`.

```javascript
import { unprefixProperty } from 'css-in-js-utils'

console.log(unprefixProperty('WebkitTransition'))
// => 'transition'

console.log(unprefixProperty('transitionDelay'))
// => 'transitionDelay'
```

------

### `unprefixValue(value)`
Removes all vendor prefixes (if any) from the `value`.

```javascript
import { unprefixValue } from 'css-in-js-utils'

console.log(unprefixValue('-webkit-calc(-moz-calc(100% - 50px)/2)'))
// => 'calc(calc(100% - 50px)/2)'

console.log(unprefixValue('100px'))
// => '100px'
```

## Direct Import
Every utility function may be imported directly to save bundle size.

```javascript
import camelCaseProperty from 'css-in-js-utils/lib/camelCaseProperty'
```

## License
css-in-js-utils is licensed under the [MIT License](http://opensource.org/licenses/MIT).<br>
Documentation is licensed under [Creative Common License](http://creativecommons.org/licenses/by/4.0/).<br>
Created with ♥ by [@rofrischmann](http://rofrischmann.de).
