# relational-node
> a relational language implemented in node

[![travis badge](https://travis-ci.org/ashleygwilliams/relational-node.svg)](https://travis-ci.org/ashleygwilliams/relational-node)
[![code climate badge](https://d3s6mut3hikguw.cloudfront.net/github/ashleygwilliams/relational-node/badges/gpa.svg)](https://codeclimate.com/github/ashleygwilliams/relational-node)
[![david deps badge](https://david-dm.org/ashleygwilliams/relational-node.svg)](https://david-dm.org/ashleygwilliams/relational-node)

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

- `build`: compile es6 from `/lib/es6` to es5 files in `/lib/es5` (the tests run off of the es5 deps)
- `test`: runs the tests 

[3]: https://babeljs.io/
[4]: https://mochajs.org/
[5]: http://chaijs.com/
