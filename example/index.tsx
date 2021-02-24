import 'react-app-polyfill/ie11';
import React, { useState } from 'react';
import * as ReactDOM from 'react-dom';
import useTimeoutMockInterval from '../src/index';

const App = () => {
  const [delay, setDelay] = useState<null|number>(null);
  const [tempDelay, setTempDelay] = useState<number>(0);

  const handleDelay = (value) => {
    const res = value * 1;
    setTempDelay(res);
  }

  useTimeoutMockInterval(() => {
    console.log(delay, new Date().getTime());
  },delay)

  return (
    <div>
      <div className="">
        <input
          type="number"
          value={tempDelay}
          onChange={(e) => handleDelay(e.target.value)}
        />
        <button onClick={() => setDelay(tempDelay)}>start interval</button>
        <button onClick={() => setDelay(null)}>set delay null</button>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
