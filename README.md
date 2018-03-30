<h1 align="center">
  Redux Status Helpers
</h1>

<p align="center">
  <a href="https://travis-ci.org/jxshco/redux-status-hepers"><img src="https://travis-ci.org/jxshco/redux-status-helpers.svg?branch=master" alt="travis"></a>
  <a href="https://www.npmjs.com/package/redux-status-helpers"><img src="https://img.shields.io/npm/v/redux-status-helpers.svg" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/redux-status-helpers"><img src="https://img.shields.io/npm/dt/redux-status-helpers.svg" alt="npm downloads"></a>
  <a href="https://standardjs.com"><img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" alt="Standard - JavaScript Style Guide"></a>
</p>



<p align="center">Structure Redux Better with Different Statuses</p>

## Why?

Typically when working with redux I work with API's or other things that may succeed, fail or do something in the meantime. By utilising statuses and updating the state based on the status using this package we don't need to continuously write **SUCCESS**, **FAILURE** or anything else.

- **SUCCESS.** The success helper is dispatched when an API has been called and succeeded or something has worked e.g. Login Success, Fetch Result Success (with data as payload)
- **FAIL** The Fail helper is dispatched when something has failed e.g. Login Failure, Failed to Fetch result. (With Error message as payload)
- **CANCELLED** The Cancelled helper is dispatched when you cancel an action (this would stop your spinner loading or whatever else you have done while in progress)



## Table of Contents

- Quick start
  - [Install](#install)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Licence](#licence)


## Install

Add redux-status-helpers to your project using npm or yarn.

Install (NPM):
```bash
$ npm install redux-status-helpers --save
```

Install (Yarn):
```bash
$ yarn add redux-status-helpers
```


## Usage

Import Statuses you require

```js
import { success, fail, cancelled } from 'redux-status-helpers'
```

Dispatch your type
```js
dispatch({type: 'LOGIN'})
```

Dispatch the status depending on the result
```js
dispatch({type: success('LOGIN')}) //LOGIN__SUCCESS
dispatch({type: fail('LOGIN')}) //LOGIN__FAILURE
```

In your reducer add a case for your statuses
```js
const reducer = (state = {logged_in: false, logging_in: false, error: null}, action) => {
  switch (action.type) {
    case 'LOGIN': return {...state, logging_in: true}
    case success('LOGIN'): return {...state, logging_in: false, logged_in: true}
    case fail('LOGIN'): return {...state, logging_in: false, error: true}
    case cancelled('LOGIN'): return {...state, logging_in: false}
    default: return state
  }
}
```

## Contributing

Pull requests for new features, bug fixes, and suggestions are welcome!

## Licence

[MIT](https://github.com/jxshco/redux-status-helpers/blob/master/LICENCE)
