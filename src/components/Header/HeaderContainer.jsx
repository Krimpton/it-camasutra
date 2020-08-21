import React from "react";
import Header from "./Header";
import {getAuthUserData} from "../../Redux/authReducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component {
    componentDidMount() { // компонента вмонтирована
        this.props.getAuthUserData();
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

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);