import React from "react";

const Form = (props) => {
  const { 
    values,
    disabled,
    change,
    submit,
    errors
  } = props;
    
  const onSubmit = evt => {
    evt.preventDefault()
    submit();
  }

  const onChange = evt => {
    const { name, value, checked, type } = evt.target;
    const knownValue = type === 'checkbox' ? checked : value;
    change(name, knownValue);
  }
    return ( 
        <form 
        className="form container" 
        onSubmit={onSubmit}
        id="pizza-form">
   
            <div className="form-top submit">
                <h2>Pizza</h2>
                <button id="order-button" disabled={disabled} onClick={submit}>Submit Order</button>
                <div className="errors">
                    <div>{errors.name}</div>
                    <div>{errors.size}</div>
                    <div>{errors.specialText}</div>
                    
                </div>
            </div>
             
            <div className="form options errors size name">
                <h3>Options</h3>
                <label>Customer Name &nbsp;
                    <input
                        id="name-input"
                        onChange={onChange}
                        name="name"
                        type="text"
                        value={values.name}
                    />
                </label>  
                <div>
                    <label>Size&nbsp;
                        <select
                          onChange={onChange}
                          value={values.size}
                          name="size"
                          id="size-dropdown"
                        >
                            <option value="">- Pick a Size! -</option>
                            <option value="regular">Regular (9")</option>
                            <option value="large">Large (11")</option>
                            <option value="party">Party (14")</option>
                            <option value="institutional">Institutional (20")</option>
                        </select>
                    </label>
                </div>  
            </div>
            <div className="form options toppings" >
                <h5>Select Optional Toppings</h5>
                <ul className="no-bullets">
                    <li>
                        <label>
                            <input
                                onChange={onChange}
                                name="prosciutto"
                                type="checkbox"
                                checked={values.prosciutto}
                            />
                        </label>
                        Prosciutto                     
                    </li>                  
                    <li>
                        <label>
                            <input
                                onChange={onChange}
                                name="granaPadano"
                                type="checkbox"
                                checked={values.granaPadano}
                            />
                            Grana Padano 
                        </label>  
                    </li>                  
                    <li>
                        <label>
                            <input
                                onChange={onChange}
                                name="artichoke"
                                type="checkbox"
                                checked={values.artichoke}
                            />
                            Artichoke Hearts
                        </label>  
                    </li>                  
                    <li>
                        <label> 
                            <input
                                onChange={onChange}
                                name="basil"
                                type="checkbox"
                                checked={values.basil}
                            />
                            Dark Opal Basil
                        </label>
                    </li>  
                </ul>
            </div>

            <div>
                <label>Special Instructions
                    <input 
                        onChange={onChange}
                        name="specialText"
                        type="text"
                        value={values.specialText}
                        id="special-text"
                    />
                </label> 

            </div>
        </form>
    ) 
}
export default Form
