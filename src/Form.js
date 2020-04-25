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
            <form onSubmit={onSubmit} id="form">

            <h2 id="place">Place Your Order Below!</h2>

            <Link to="/home">
                <button>Take Me Home..</button>
            </Link>

            

            <label>
            {errors.name}
            <br/>
                <input 
                onChange={onInputChange}
                value={values.name}
                placeholder="Type Your Damn Name"
                name="name"
                type="text"
                />
                <br/>
                Name For Order
            </label>
            
           

            <br/>

            <h3>Select Size</h3>
            <br/>
            {errors.size}
            <br />
            <select name="size" onChange={onInputChange}
            
            >
                <option defaultValue="" value={values.size} >Choose Your Damn Size</option>
                <option value="Large"  >Large</option>
                <option value="Medium" >Medium</option>
                <option value="Small" >Small</option>
                </select>

                <br/>

                <h3>Add Toppings!</h3>
                <label> <input value={values.toppings.pepperoni} onChange={onCheckboxChange} name="Pepperoni, " type="checkbox" />Pepperoni</label>
                <label> <input value={values.toppings.sausage} onChange={onCheckboxChange}  name="Sausage, " type="checkbox" />Sausage</label>
                <br/>
                <label> <input value={values.toppings.bacon} onChange={onCheckboxChange} name="Bacon, " type="checkbox" />Bacon</label>
                <label> <input value={values.toppings.olives} onChange={onCheckboxChange} name="Olives" type="checkbox" />Olives</label>
                <br/>

                <label>
                <input onChange={onInputChange}
                value={values.special}
                name="special"
                type="text"
                placeholder="Better Not Request Anything"
                />
                : Special Instructions
            </label>
            <br/>
            <button >Submit Your Order</button>
            

            </form>
        </div>
    )
}
export default Form;