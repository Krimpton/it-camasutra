import React from "react";
import Header from "./Header";
import * as axios from "axios";
import {setAuthUserData} from "../../Redux/authReducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component {
    componentDidMount() { // компонента вмонтирована
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true // пользователь авторизован
        })
            .then(response => { //запрос на сервак
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data;
                    this.props.setAuthUserData(id, email, login);
                }
            });
    }

    render() {
        return (<Header {...this.props}/>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);