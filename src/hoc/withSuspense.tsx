import React, {Component, ComponentType} from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {ReduxStateType} from "../Redux/Redux-Stor";


function withSuspense<T>(Component: ComponentType<T>) {

    return (props: any) => {
        <Component {...props}/>
    }
};

export default withSuspense;