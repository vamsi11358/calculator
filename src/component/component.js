import './component.css';
import {useState} from 'react';

export default function Calculator(){
    const [display, setDisplay] = useState('');
    const [result, setResult] = useState('');

    const handleClick = (value) => {
      setDisplay((prev) => prev + value);
    };
    const handleClear = () => {
        setDisplay('');
        setResult('');
      };
    
      const handleEqual = () => {
        try {
          setDisplay(eval(display).toString());
          setResult(eval(display).toString());
        } catch {
          setResult('Error')
        }
      };
    return (
        <>
        <h1>React Calculator</h1>
        <div className="outer">
        <input value={display} type='text'/>
        <div>
        {result}
        </div>
        <div className='inner'>
        <button onClick={handleClear}>C</button>
        <button onClick={() => handleClick('/')}>/</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={handleEqual}>=</button>
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button className="zero" onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        </div>
        </div>

        </>
    )
}