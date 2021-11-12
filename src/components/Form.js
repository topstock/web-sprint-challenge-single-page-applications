import React from "react";

const Form = (props) => {
  const { 
    values,
    disabled,
    change,
    submit,
  } = props;
    
  const onSubmit = evt => {
    evt.preventDefault()
    submit();
  }

  const onChange = evt => {
    const {name, value, checked, type } = evt.target;
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
                <button disabled={disabled}>Submit Order</button>
                <div className="errors"></div>
            </div>
            
            <div className="form options">
                <h3>Options</h3>
                <label>
                    <input
                        id="name-input"
                        onChange={onChange}
                        name="name"
                        type="text"
                       // value={values.name}
                    />
                </label>  

                <label>Size
                    <input
                        onChange={onChange}
                        name="size"
                        type="text"
                    //   value={values.size}
                    />
                </label> 

                <label>Meat 
                    <input
                        onChange={onChange}
                        name="meat"
                        type="checkbox"
                    //   checked={values.meat}
                    />
                </label>                    
                
                <label>Vegitable 
                    <input
                        onChange={onChange}
                        name="vegitable"
                        type="checkbox"
                    //   checked={values.vegitable}
                    />
                </label>

                <label>Crust 
                    <input
                        onChange={onChange}
                        name="crust"
                        type="text"
                    //    value={values.crust}
                    />
                </label>                    
            </div>
        </form>
    ) 
}
export default Form
