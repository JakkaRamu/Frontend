
import { useState } from "react";


const Calculator=()=>{
    const [input,setInput]=useState('')
    const [result,setResult]=useState('')
    const [res,setRes]=useState(false)
    const handleClick=(value)=>{
        if(value==='='){
            setResult(eval(input).toString())
            setRes(true)
        }
        else if(value==='C'){
            setInput('')
            setResult('')
            setRes(false)
        }
        else{
            setInput((prevInput)=>prevInput+value)
        }
    }
    console.log(input)
    return <>
        <div className="container">
            <div className="hero">
                <div className="display">
                    <input type="text"  value={input} readOnly />
                    {
                        res?<div className="result">{result}</div>:null
                    }
                </div>
                <div className="btns">
                
                    <button onClick={() => handleClick('7')}>7</button>
                    <button onClick={() => handleClick('8')}>8</button>
                    <button onClick={() => handleClick('9')}>9</button>
                    <button onClick={() => handleClick('/')}>/</button>

                    <button onClick={() => handleClick('4')}>4</button>
                    <button onClick={() => handleClick('5')}>5</button>
                    <button onClick={() => handleClick('6')}>6</button>
                    <button onClick={() => handleClick('*')}>*</button>

                    <button onClick={() => handleClick('1')}>1</button>
                    <button onClick={() => handleClick('2')}>2</button>
                    <button onClick={() => handleClick('3')}>3</button>
                    <button onClick={() => handleClick('-')}>-</button>

                    <button onClick={() => handleClick('0')}>0</button>
                    <button onClick={() => handleClick('.')}>.</button>
                    <button onClick={() => handleClick('=')}>=</button>
                    <button onClick={() => handleClick('+')}>+</button>

                    <button className="clear" onClick={() => handleClick('C')}>
                        C
                    </button>
                
                </div>
            </div>
        </div>
    </>
}
export default Calculator;