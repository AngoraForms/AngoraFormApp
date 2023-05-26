'use client'
import PreviousMap from "postcss/lib/previous-map";
import React from "react"
import { useState } from "react"

const initialValidationState = {
  required: false,
  emailValidation: false,
  minLength: null,
  maxLength: null,
  passwordValidation: null
};

export default function Customizers (props: any) {

  const { currentConfig, setCurrentConfig } = props;
  const [ validatorDropdown, setValidatorDropdown] = useState<boolean>(false);
  const [formInputValue, setFormInputValue] = useState<string>('');
  const [formInitialValue, setFormInitialValue] = useState<string>('');

  //validation States
  const [validatorConfiguration, setValidatorConfiguration] = useState<{}>(initialValidationState)
  const [minLength, setMinLength] = useState<number | null>(null);
  const [maxLength, setMaxLength] = useState<number | null>(null);
  const [validators , setValidators] = useState<string[][]>([]);
  //function that open the validator dropdown
  const openValidator = ():void => {
    setValidatorDropdown(!validatorDropdown);
  }
  //add form updates the state initially declare in FormBuilder page
  const addForm = ():void => {
    const currentInputValidator: string[] = [];
    //setting up the validator state using setValidator based on validator configuration
    for (const [key, value] of Object.entries(validatorConfiguration)) {
      if (key === 'required' && value === true) {
        currentInputValidator.push(' Validators.required');   
      } else if (key === 'emailValidation' && value === true) {
        currentInputValidator.push(' Validators.email');
      } else if (key === 'minLength' && typeof value === 'number') {
        currentInputValidator.push(` minLength(${value})`)
      } else if (key === 'maxLength' && typeof value === 'number') {
        currentInputValidator.push(` maxLength(${value})`)
      }
    }
    setValidators(() => {
      validators.push(currentInputValidator);
      return validators;
    });  
    //using useState to change the configuration of the form
    props.setCurrentConfig((prevState:{}):{} => ({
      ...prevState,
      formControl: [...prevState.formControl, formInputValue],
      initialValues: [...prevState.initialValues, formInitialValue],
      validators: [...prevState.validators, validators],
    }));
  }

  return (
    <div className="flex">
      
      {/* onSubmit, invoke addForm to build form controllers
      e.target.reset() empties the form after submission
       */}
      <form onSubmit={(e) => {
        e.preventDefault();
        addForm();
        e.target.reset();
        setValidatorConfiguration(initialValidationState);
        setValidators([]);
      }}
        className="flex-col border border-black shadow rounded-lg px-10 py-5"
      >
        <div className="flex">
          <label htmlFor="inputName">inputName</label>
          <input className="border border-black rounded-md px-2"
          name="inputName" onChange={(e) => setFormInputValue(e.target.value)}/>
        </div>
        <div className="flex">
          <label htmlFor="initialValue">InitialValue</label>
          <input className="border border-black rounded-md px-2"
          name="initialValue" onChange={(e) => setFormInitialValue(e.target.value)}/>
        </div>
        <div className="flex justify-center">
          <div onClick={openValidator}
          className="border border-black px-5 py-1 rounded-md
          hover:bg-black hover:text-white duration-500
          ">Validators</div>
        </div>
        {/* { validatorDropdown === true ?  */}
        <div id="validators" className="flex flex-col
          h-1/1
        ">
        <div>
          <label htmlFor="">Required</label>
          <input name="required" type="checkBox" onClick={(e) => {
            if (e.target.checked) setValidatorConfiguration({...validatorConfiguration, required: true});
            else setValidatorConfiguration({...validatorConfiguration, required: false});
          }}/>            
        </div>
        <div>
          <label htmlFor="emailValidation">EmailValidation</label>
          <input name="emailValidation" type="checkBox" onChange={(e) => {
            if (e.target.checked) {
              setValidatorConfiguration({...validatorConfiguration, emailValidation: true});
            } else {
              setValidatorConfiguration({...validatorConfiguration, emailValidation: false});
            }
          }} />
        </div>
        <div>
            <label htmlFor="minLengthValidation">MinLength</label>
            <input className="border border-black rounded-md px-2" name="minLengthValidationInput" onChange={(e) => {
              setMinLength(Number(e.target.value));
            }}/>
            <input type="checkBox" name="minLengthValidationConfirm" onChange={(e) => {
              if (e.target.checked) {
                setValidatorConfiguration({...validatorConfiguration, minLength: minLength});
              } else {
                setValidatorConfiguration({...validatorConfiguration, minLength: null});                 
              }
            }}/>
        </div>
        <div>
            <label htmlFor="maxLengthValidation">MaxLength</label>
            <input className="border border-black rounded-md px-2"
            name="maxLengthValidationInput" onChange={(e) => {
              setMaxLength(Number(e.target.value));
            }}/>
            <input type="checkBox" name="maxLengthValidationConfirm" onChange={(e) => {
              if (e.target.checked) {
                setValidatorConfiguration({...validatorConfiguration, maxLength: maxLength});
              } else {
                setValidatorConfiguration({...validatorConfiguration, maxLength: null});                 
              }
            }}/>
        </div>
      </div> 
      <div className="text-center">Choose Validators</div>
        {/* } */}
        
        {/* <input type="reset" value="Reset Input"/> */}
        <input className="border border-black p-3 rounded-md duration-500 hover:bg-black hover:text-white" type="submit" value="Create Input"/>
      </form>
    </div>
  )
}