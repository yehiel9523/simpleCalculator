import './App.css';
import { useState, useEffect } from 'react';
import Screen from './Screen';
import Button from './Button';
import OparatorButton from './OperatorButton';
import EqButton from './EqButton';
import ClearButton from './ClearButton';
function App() {
  const [screen, setScreen] = useState([]);
  const [eq, setEq] = useState(false);
  useEffect(() => {
    operator();
  }, [eq]);
  const setS = (value) => {
    setScreen([...screen, value])
  };
  const clearS = () => {
    setScreen([])
  };
  const calc = (num1, operator, num2) => {
    if (operator === "+")
      return num1 + num2;
    if (operator === "-")
      return num1 - num2;
    if (operator === "*")
      return num1 * num2;
    if (operator === "/")
      return num1 / num2;
    else
      console.log('wrong oparator');
  }
  const operator = () => {
    if (screen.length >= 3) {
      const arr = [];
      let startIndex = 0;
      let res = screen[0];
      for (let i = 0; i < screen.length; i++) {
        if (typeof screen[i] !== 'number') {
          arr.push(parseInt(screen.slice(startIndex, i).join('')));
          arr.push(screen[i]);
          startIndex = i + 1;
        }
      }
      if (!isNaN(parseInt(screen.slice(startIndex).join(''))))
        arr.push(parseInt(screen.slice(startIndex).join('')));
      for (let i = 0; i < arr.length - 2; i += 2) {
        res = calc(arr[i], arr[i + 1], arr[i + 2]);
        arr[i + 2] = res;
      }
      if (arr.length > 2)
        setScreen([res]);
    }
  }

  const buttons = () => {
    let res = [];
    for (let i = 0; i <= 9; i++) {
      res.push(<Button id={i} on={setS} />)
    }
    return res;
  }

  return (
    <div className="App">
      <div className="calculator">
        <Screen scrArr={screen} />
        {
          buttons()
        }
        <OparatorButton id='+' on={setS} scr={screen} />
        <OparatorButton id='-' on={setS} scr={screen} />
        <OparatorButton id='*' on={setS} scr={screen} />
        <OparatorButton id='/' on={setS} scr={screen} />
        <EqButton id='=' on={setS} eq={setEq} toggle={!eq} scr={screen} />
        <ClearButton id='c' on={clearS} />
      </div>
    </div>
  );
}

export default App;
