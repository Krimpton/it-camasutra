import React from "react";
import ss from "./FormsControls.module.css";


const FormControl = ({input, meta, child, ...props}) => {
    const hasError = meta.touched && meta.error;

    return (
        <div className={ss.formControl + " " + (hasError ? ss.error : "")}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}


export const textArea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea{...input} {...restProps}/></FormControl>
}
export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea{...input} {...props}/></FormControl>
}