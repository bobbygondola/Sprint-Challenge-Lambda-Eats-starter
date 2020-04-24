import React, {useState} from "react";
import { Route, Link } from "react-router-dom";

//page imports
import Form from "./Form"
//special imports
import * as yup from "yup";
import axios from 'axios'
//variables
const url = "https://reqres.in/api/users";

// const memberList = [{
//   name: "bobby",
//   size: "Large",
//   special: "NO",
//   toppings: {
//     pepperoni: true,
//     sausage: true,
//     bacon: true,
//     olives: false
//   }

// }]

  const initialFormValues = {
      name: '',
      size: '',
      special: '',
      ///// CHECKBOXES /////
      toppings: {
        pepperoni: false,
        sausage: false,
        bacon: false,
        olives: false
      },
    }

    // the shape of the validation errors object
const initialFormErrors = {
  name: '',
  size: '',
}

// SCHEMA FOR VALIDATION
const formSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'username must have at least 3 characters!')
    .required('Name is required!'),
  size: yup
    .string()
    .required('Size is required'),
    special: yup
    .string()
})



function App() {

  //set states
  const [order, setOrder] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)
  //set error states
  const [formErrors, setFormErrors] = useState(initialFormErrors)

  //yup
  const onInputChange = evt => {
    
    const name = evt.target.name
    const value = evt.target.value

    setFormValues({...formValues, [name]: value});


    //yup
    yup
    .reach(formSchema, name)
    .validate(value)
    .then(valid => {
      setFormErrors({
        ...formErrors,
        [name]: '',
      })
    })
    .catch(err => {
      setFormErrors({
        ...formErrors,
        [name]: err.errors[0]
      })
      setFormErrors({
        ...formErrors,
        [name]: err.errors[0]
      })
    })
    }

  

  ///////////////checkbox change
      const onCheckboxChange = evt => {

        const { name } = evt.target
        const isChecked = evt.target.checked
    
        setFormValues({
          ...formValues, toppings: {...formValues.toppings, [name]: isChecked}})
        
        }

      //post order to the api
      // const postOrder = info => { 
      //   //set the updated list of friends in state
  
      //   axios.post(url, info)
      //     .then(res => {
      //       setOrder([...order, res.data])
      //       console.log(res.data)
      //     })
      //     .catch(err => {
      //       debugger
      //     })
    
      // }



      //ON SUBMIT
      const onSubmit = evt => {
        evt.preventDefault()
    
        const newOrder = {
          name: formValues.name,
          size: formValues.size,
          special: formValues.special,
          toppings: Object.keys(formValues.toppings)
            .filter(topping => formValues.toppings[topping] === true)

            
        }
    
        // magic stuff
        setOrder([...order, newOrder])
        // postOrder(newOrder)
        setFormValues(initialFormValues)
      }
      
  return (
    <div>
      <h1 id="logo">Lambda Eats</h1>
      <p>Where you can only have pizza..</p>
      <Link to="/pizza"><button>ORDER NOW</button></Link>
      

      <Route exact path="/pizza" component={Form}/>
      

    

      {order.map((orders) => {
        return (
          <div key={orders.name} id="pizzaorder"> 
          <h4>{orders.name}</h4>
          <p>{orders.size}</p>
          <p>{orders.special}</p>
           </div>
        )
      })}

      <Form 
              values={formValues}
              onInputChange={onInputChange}
              onCheckboxChange={onCheckboxChange}
              errors={formErrors}
              onSubmit={onSubmit}
      />
      </div>
    );
};

export default App;