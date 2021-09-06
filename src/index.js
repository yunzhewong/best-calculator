import React, {useState} from 'react';
import ReactDOM from 'react-dom';

function Calculator ()  {
    const num1 = useInput("");
    const num2 = useInput("");


    return (
        <div>
            <h1> I am programming!!!</h1>
            <h1> Hello World!!</h1>
            <h1> The best calculator</h1>
            <div >
                <input type="text" {...num1}></input>
                <h3 style={{display: 'inline',}}>+</h3>
                <input type="text" {...num2}></input> 
            </div>
            <br />
            <h1 style={{display: 'inline',}}> Result </h1>
            <input type="text" value= {num1.value + num2.value} />
        </div>
    )
}

function useInput(initialValue) {
    const [value, setValue] = useState(initialValue);

    function handleChange (e) {
        setValue(e.target.value);
    }

    return {
        value: value,
        onChange: handleChange,
    }
}


ReactDOM.render(
    <div> 
        <Calculator />
    </div>,
    document.getElementById('root')
)