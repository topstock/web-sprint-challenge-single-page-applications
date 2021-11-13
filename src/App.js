import React, { useState, useEffect } from "react";
import "./App.css";
import UNSPLASH from "./constants/url-constants";
import { NavLink, Route, useHistory } from "react-router-dom";
import Form from "./components/Form";
import axios from "axios";
import schema from "./validation/formSchema";
import * as yup from "yup";

const initialFormValues = {
    name: "",
    size: "",
    prosciutto: false,
    granaPadano: false,
    artichoke: false,
    basil: false,
    specialText: ""  
}

const initialFormErrors = {
  name: "",
  size: "",
  specialText: ""
}

const initialDisabled = true;

const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const  [formErrors, setFormErrors] = useState(initialFormErrors);
  const  [disabled, setDisabled] = useState(initialDisabled);
  const [orders, setOrders] = useState([]);

  const {UNSPLASH_URL, UNSPLASH_PROFILE_URL} = UNSPLASH;
  const history = useHistory();
  
  const validate = (name, value) => {
    yup.reach(schema, name).validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  }

  const changeInput = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const submit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size,
      specialText: formValues.specialText.trim(),
      toppings: ["prosciutto", "granaPadano", "artichoke", "basil"].filter(topping => !!formValues[topping])
    }

    postNewOrder(newOrder);
  }

  const postNewOrder = newOrder => {

    axios.post("https://reqres.in/api/orders", newOrder)
      .then(res => {
        setOrders([res.data, ...orders]);
      })
      .catch(err => console.error(err))
      .finally(() => {
        setFormValues(initialFormValues);
      })
  }

  useEffect(() => {
     schema.isValid(formValues).then(valid => setDisabled(!valid));
  }, [formValues])

  return (
    <>
      <section className="App-header bgImage3to2ar-headerjpg">
        <div className="headerContent">
        <h1>λ Lambda Eats</h1>
        <p>Serving the World"s Best Coding Bootcampers</p>
        <nav>
          <NavLink 
            to="/pizza"
            className="home navLink" 
            id="order-pizza"
          >
            Pizza?
          </NavLink>
          <NavLink 
            to="/"
            className="home navLink" 
            id="homeLink"
          >
            Home
          </NavLink>
        </nav>
        <h6>
          Header Photo by <a href={UNSPLASH_PROFILE_URL} rel="noreferrer" target="_blank">Spencer Davis </a>on <a href={UNSPLASH_URL} rel="noreferrer" target="_blank"> Unsplash</a>
        </h6>
        </div>
      </section>
      <Route exact path="/">
        <div id="homePage">
          <button onClick={()=> history.push("/pizza")} id="orderBtn">Pizza?</button> 
        </div>
      </Route>
      <Route path="/pizza" >
        <Form 
          errors={formErrors}
          values={formValues} 
          change={changeInput}
          submit={submit}
          disabled={disabled}
          />
      </Route>

      { 
        orders.map(order => {
          return (
          <h5>{order.name} ordered {order.size}: {order.toppings.join(', ')} instructions: {order.specialText}</h5>
      )})}  
    </>    
  );
};
export default App;
