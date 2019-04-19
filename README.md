# UniqueID

A simple tiny npm package to generate custom length unique id


# How it works

the first parameter of `idunique(character,length)` has default value of non-accented English alphabet small and upper case with 0-9 numeric, the loop generate a string picking a random index, this can be modified to have special characters, the test results shows it take about 2 millisecond to generate 10 unique ids with zero match and 24 ms for 10,000 unique ids with zero match. 

**the return type is ``Promise``**

## How to

#### Installation
``npm i idunique``
#### functionality
No additional configuration needed, simply call ``idunique()``  or the variable you declared for the package as ``function``.
```javascript
  let somevariable = require('idunique');
  await somevariable(); // promise
```
#### options
- you can provide custom string to first parameter to let function generate from your selection
- you can provide length of string of unique id in second parameter
``idunique(chars,16)``

# Credits

[@iMultiThinker](https://twitter.com/iMultiThinker)
