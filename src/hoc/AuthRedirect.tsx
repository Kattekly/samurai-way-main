import React from 'react';
import {Redirect} from "react-router-dom";

const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component<any, any> {
        render() {
            if (!props.isAuth) return <Redirect to={'/login'}/>
            return <Component {...this.props}/>
        }
    }

};

export default withAuthRedirect;