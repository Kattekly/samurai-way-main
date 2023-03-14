import React from 'react';
import s from './Preloader.module.css'
import {CircularProgress} from "@material-ui/core";

const Preloader = () => {
    return (
        <div className={s.preloader}>
            <CircularProgress color='primary'
                              size='56px'/>
        </div>
    );
};

export default Preloader;