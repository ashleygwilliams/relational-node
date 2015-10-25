# relational-node
> a relational language implemented in node

[![travis badge](https://travis-ci.org/ashleygwilliams/relational-node.svg)](https://travis-ci.org/ashleygwilliams/relational-node)

when i learned about programming paradigms, my engineering world burst
wide open. a paradigmatic approach to programming is key to avoiding dogma
and choosing the right tool for the job.

this repository contains code that implements a relational language in node,
based on a post by [@tomstuart][2], http://codon.com/hello-declarative-world.

## Up and Running

1. Fork and clone this project
2. Install dependencies: `npm install`
    - [`Babel`][3]: compile es6 to es5
    - [`Mocha`][4] and [`Chai`][5]: test framework and expect library, respectively


## Tests

This project uses [Mocha][4] and [Chai][5] for testing. To run the tests:

```
npm test
```

## Scripts

- `build`: compile es6 from `/lib` to es5 files in `/es5` (the tests run off of the es5 deps)
- `test`: runs the tests 

it's true that [@jcoglan][2] has [already implemented this in ES6][1], but i'd like to
do it myself to learn more.

[1]: https://github.com/jcoglan/kanrens/tree/master/es6
[2]: https://github.com/jcoglan
