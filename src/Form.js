import React from 'react';
import { Link } from "react-router-dom";
//special imports
import "./index.css";

    
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

            <form onSubmit={onSubmit} id="form">

            <label>
            {errors.name}
            <br/>
                <input 
                onChange={onInputChange}
                value={values.name}
                name="name"
                type="text"
                />
                <br/>
                Name for Order
            </label>
            
           

            <br/>

            <h3>Select Size</h3>
            <br/>
            {errors.size}
            <br />
            <select name="size" onChange={onInputChange}
            
            >
                <option defaultValue="" value={values.size} >Please choose</option>
                <option value="large"  >Large</option>
                <option value="medium" >Medium</option>
                <option value="small" >Small</option>
                </select>

                <br/>

                <h3>Add Toppings!</h3>
                <label> <input value={values.toppings.pepperoni} onChange={onCheckboxChange} name="pepperoni" type="checkbox" />Pepperoni</label>
                <label> <input value={values.toppings.sausage} onChange={onCheckboxChange}  name="sausage" type="checkbox" />Sausage</label>
                <br/>
                <label> <input value={values.toppings.bacon} onChange={onCheckboxChange} name="bacon" type="checkbox" />Bacon</label>
                <label> <input value={values.toppings.olives} onChange={onCheckboxChange} name="olives" type="checkbox" />Olives</label>
                <br/>

                <label>
                <input onChange={onInputChange}
                value={values.special}
                name="special"
                type="text"
                />
                Special Instructions
            </label>
            <br/>
            <button >Submit Your Order</button>
            

            </form>
        </div>
    )
}
export default Form;