# Redux Status Helpers [![Build Status](https://travis-ci.org/jxshco/redux-status-helpers.svg?branch=master)](https://travis-ci.org/jxshco/redux-status-helpers) [![https://npmjs.org/jxshco/redux-status-helpers](https://img.shields.io/npm/dt/redux-status-helpers.svg)](https://www.npmjs.com/package/redux-status-helpers) [![https://npmjs.org/jxshco/redux-status-helpers](https://img.shields.io/npm/v/redux-status-helpers.svg)](https://www.npmjs.com/package/redux-status-helpers)

#### Structure Redux Better with Different Statuses

## Install
Add Redux Status Helpers to your Project
```bash
npm install redux-status-helpers --save

or

yarn add redux-status-helpers
```

## Usage

Import Statuses you require

```js
import { success, fail, in_progress } from 'redux-status-helpers'
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

## License

MIT
