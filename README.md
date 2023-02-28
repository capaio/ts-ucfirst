# ts-ucfirst [![npm Version](http://img.shields.io/npm/v/ts-ucfirst.svg?style=flat)](https://www.npmjs.org/package/slice-paginate) ![workflow](https://github.com/capaio/ts-ucfirst/actions/workflows/test-and-quality.yml/badge.svg)


> Uppercase first character of a string in case you are too lazy to do it yourself

**Example:**

```
ucfirst('hello world'); // 'Hello world'
```

**Example to capitalize each word of a sentence:**

```
const sentence = "sentence to be all capitalized"
sentence.split(' ').map(ucfirst).join(' '); // 'Sentence To Be All Capitalized'  
```
