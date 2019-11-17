import React from 'react'
import './input.css'

const Input = ({elementType, elementConfig, value, changed, invalid, shouldValidate, touched}) => {
    let inputElement = null;
    const inputClasses = ["InputElement"];
    if(invalid && shouldValidate && touched){
        inputClasses.push('Invalid');
    }

    switch(elementType){
        case('input'):
        inputElement = <input 
            className={inputClasses.join(' ')} 
            {...elementConfig}
            value={value}
            onChange={changed}
        />
        break;
        case('txt'):
        inputElement = <textarea 
            className={inputClasses} 
            {...elementConfig}
            value={value}
            onChange={changed}
        />
        break;
        case('select'):
        inputElement = (
        <div>
            <p>Select a delivery method</p>
            <select 
                className={inputClasses}
                {...elementConfig}
                value={value}
                onChange={changed}
                >
                {elementConfig.options.map(el => (
                <option key={el.value} value={el.value}>
                    {el.displayValue}
                </option>
                ))}
            </select>
        </div>
        )
        break;
        default:
            inputElement = <input 
                className={inputClasses} 
                value={value}
                onChange={changed}
            />
    }

   return(
    <div className="Input">
        {inputElement}
    </div>
   );
};

export default Input;