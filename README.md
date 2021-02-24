# use-timeout-mock-interval

A custom React Hook that provides a declarative setTimeout mock setInterval called useTimeoutMockInterval.

[![NPM](https://img.shields.io/npm/v/use-timeout-mock-interval.svg)](https://www.npmjs.com/package/use-timeout-mock-interval)

## Installation

```
$ npm i use-timeout-mock-interval
```

or

```
$ yarn add use-timeout-mock-interval
```

## Usage

```
useTimeoutMockInterval(fn, delay);
```
### Parameters

Here are the parameters that you can use.

| Parameter  | Description                                                                      |
| :--------- | :------------------------------------------------------------------------------- |
| `fn` | A function that will be called every `delay` milliseconds.                       |
| `delay`    | A number representing the delay in msecs. Set to `null` to "pause" the interval. |

## Example

```
import React, { useState } from 'react';
import useTimeoutMockInterval from 'use-timeout-mock-interval';

const Counter = ({ delay = 1000 }) => {
  const [count, setCount] = useState(0);

  useTimeoutMockInterval(() => {
    setCount((currentCount) => currentCount + 1);
  }, delay);

  return <h1>{count}</h1>;
};

export default Counter;
```

## License

**[MIT](LICENSE)** Licensed