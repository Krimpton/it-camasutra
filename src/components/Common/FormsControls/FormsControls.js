import React from "react";
import ss from "./FormsControls.module.css";
import {Field} from "redux-form";


const FormControl = ({meta: {touched, error}, children}) => {
    const hasError = touched && error;

    return (
        <div className={ss.formControl + " " + (hasError ? ss.error : "")}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}


export const textArea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea{...input} {...restProps}/></FormControl>
}
export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input{...input} {...restProps}/></FormControl>
}

export const CreateField = (placeholder, name, validators, component, props = {}, text = "") => {
    return <div>
        <Field placeholder={placeholder} name={name}
               validate={validators}
               component={component}
               {...props}
        /> {text}
    </div>
}