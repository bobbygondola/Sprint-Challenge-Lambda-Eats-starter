import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
//special imports

import axios from 'axios';


    

    

//////////////////////////////////////////////////////////////////////////SUBMITTING////////////////////////////////////////////





    
function Form(props){
    const {
        values,
        onInputChange,
        onCheckboxChange,
        onSubmit,
        errors,
      } = props


    return (
        <div>
            <h2>Order Now!</h2>
            <Link to="/home">
                <button>Im not ready yet..</button>
            </Link>
            <form>
            <label>
                <input onChange={onInputChange}
                name="name"
                type="text"
                />
                Name for Order
            </label>
            {errors.name}
            {errors.size}

            <br/>

            <h3>Select Size</h3>
            <select name="size" onChange={onInputChange}>
                <option defaultValue="">Please choose</option>
                <option value="large">Large</option>
                <option value="medium">Medium</option>
                <option value="small">Small</option>
                </select>

                <br/>

                <h3>Add Toppings!</h3>
                <label> <input onChange={onCheckboxChange} id="pepperoni" type="checkbox" />Pepperoni</label>
                <label> <input onChange={onCheckboxChange} id="sausage" type="checkbox" />Sausage</label>
                <br/>
                <label> <input onChange={onCheckboxChange} id="bacon" type="checkbox" />Bacon</label>
                <label> <input onChange={onCheckboxChange} id="olives" type="checkbox" />Olives</label>
                <br/>

                <label>
                <input onChange={onInputChange}
                name="special"
                type="text"
                />
                Special Instructions
            </label>
            <br/>
            <button onClick={onSubmit}>Submit Your Order</button>

            </form>
        </div>
    )
}
export default Form;