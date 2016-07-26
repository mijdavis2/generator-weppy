[![NPM version][npm-image]][npm-url] 
[![Build Status][travis-image]][travis-url] 
[![Coverage percentage][coveralls-image]][coveralls-url] 
[![Codacy Badge][codacy-image]][codacy-url]
[![Weppy Version](https://img.shields.io/badge/weppy-0.7.7-blue.svg)](https://github.com/gi0baro/weppy)

# generator-weppy

**Currently in PRE-ALPHA**
 
[![NPM][npm-info-image]][npm-info-url]

Build a full-stack python web application in minutes.

This generator/cli is a tool for generating new [weppy](https://github.com/gi0baro/weppy) applications
and add new models, views, and controllers to an existing weppy applications.

Weppy is a full-stack python web framework designed with simplicity in mind. 

## Installation

Requires [npm](https://www.npmjs.com/).

```
npm install -g yo
npm install -g generator-weppy
```

## Usage

Initialize a weppy project

```
yo weppy
```

Add components:

```
yo weppy <component>
  init:         initialize a weppy project (default)
  model:        add a model to your app
  view:         add a view to your app (optional when adding a controller)
  controller:   add a controller to your app (optional when adding a view)
```

### Current Features

- Easy virtual environment setup
- Pythonic MVC scaffolding
- API module and examples included
- 100% Test Coverage
- Dev mode & development tools
- Haml templating
- Bootstrap

### ToDo

- [ ] Optional Bootstrap, Material Design and icons, or no builtin css framework
- [ ] Deployment tools
- [ ] Optional Progressive app shell structure
- [ ] Optional service workers

## About

**Live demo: https://starter-weppy.com**

> ### Starter Weppy
> [![Build Status][starter-weppy-travis-img]][starter-weppy-travis-url] [![Coverage Status][st-weppy-coveralls-image]][st-weppy-coveralls-url]
> 
> [Starter-weppy](https://github.com/mijdavis2/starter_weppy) is a 
python web application starter kit developed on the [weppy framework](https://github.com/gi0baro/weppy). 
> Current version is based on Weppy 0.7 with an MVC scaffolding. 
An api module, dev mode, and 100% test coverage are included out of the box.


## Testing

``` 
npm test
```

## License

MIT © [mijdavis2](http://mdavisinsc.com)


[npm-image]: https://badge.fury.io/js/generator-weppy.svg
[npm-url]: https://npmjs.org/package/generator-weppy
[travis-image]: https://travis-ci.org/mijdavis2/generator-weppy.svg?branch=master
[travis-url]: https://travis-ci.org/mijdavis2/generator-weppy
[coveralls-image]: https://coveralls.io/repos/mijdavis2/generator-weppy/badge.svg
[coveralls-url]: https://coveralls.io/r/mijdavis2/generator-weppy
[codacy-image]: https://api.codacy.com/project/badge/Grade/ce0ad20ca59947af86b0f17a5779c804
[codacy-url]: https://www.codacy.com/app/mijdavis2/generator-weppy?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=mijdavis2/generator-weppy&amp;utm_campaign=Badge_Grade
[npm-info-image]: https://nodei.co/npm/generator-weppy.png?downloads=true&downloadRank=true&stars=true
[npm-info-url]: https://nodei.co/npm/generator-weppy/
[starter-weppy-travis-img]: https://travis-ci.org/mijdavis2/starter_weppy.svg?branch=master
[starter-weppy-travis-url]: https://travis-ci.org/mijdavis2/starter_weppy
[st-weppy-coveralls-image]: https://coveralls.io/repos/mijdavis2/starter_weppy/badge.svg
[st-weppy-coveralls-url]: https://coveralls.io/r/mijdavis2/starter_weppy
