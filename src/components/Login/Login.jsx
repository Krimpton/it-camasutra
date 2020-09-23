import React from "react";
import {reduxForm} from "redux-form";
import {CreateField, Input} from "../Common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validator";
import {connect} from "react-redux";
import {login} from "../../Redux/authReducer";
import {Redirect} from "react-router-dom";
import ss from './Login.module.css';

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form className={ss.formStyle} onSubmit={handleSubmit}>
            <h1>Login</h1>
            {CreateField("Email", "email", [required], Input)}
            {CreateField("Password", "password", [required], Input, {type: "password"})}
            {CreateField(null, "rememberMe", null, Input, {type: "checkbox"}, "remember me")}

            {captchaUrl && <img src={captchaUrl}/>}
            {captchaUrl && CreateField("Symbols from image", "captcha", [required], Input, {})}}

            {error && <div className={ss.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>)
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return <div>

        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
}

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);