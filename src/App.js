import React, { useState, useEffect } from "react";
import UNSPLASH from "./constants/url-constants";
import { NavLink, Route, useMatch, useHistory } from "react-router-dom";
import Form from "./components/Form";
import axios from "axios";
import urlConstants from "./constants/url-constants";

const initialFormValues = {
    nameOrder: "",
    size: "",
    meat: false,
    vegitable: false,
    crust: "",
  
}
const initialDisabled = true;

const App = () => {
  const { formValues, setFormValues } = useState(initialFormValues);
  const { disabled, setDisabled } = useState(initialDisabled);
  const {UNSPLASH_URL, UNSPLASH_PROFILE_URL} = UNSPLASH;
  const history = useHistory();

  const submit = () => {

  }

  const change = () => {

  }

  return (
    <>
      <section className="App-header bgImage3to2ar-headerjpg">
        <h1>Lambda Eats</h1>
        <p>Feeding the World's Best Coding Bootcampers</p>
        <nav>
          <NavLink 
            to="/"
            className="home navLink" 
            id="order-pizza"
          >
            Home
          </NavLink>
        </nav>
        <h5>
          Header Photo by <a href={UNSPLASH_PROFILE_URL} target="_blank">Spencer Davis </a>on <a href={UNSPLASH_URL} target="_blank"> Unsplash</a>
        </h5>
        <Route exact path="/">
          <div id="homePage">
            <button onClick={()=> history.push("/pizza")}>Order Pizza</button> 
          </div>
        </Route>
        <Route path="/pizza" >
          <Form 
            values={formValues} 
            change={change}
            submit={submit}
            disabled={disabled}
            />
        </Route>
      </section>

    </>
  );
};
export default App;
