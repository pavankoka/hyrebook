import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import {
    Marketing,
} from 'modules';
import authActions from 'redux/actions/auth';
const {
    setDevice
} = authActions;

function Routes({ dispatch }) {

    useEffect(() => {
        dispatch(setDevice({ isMobile }));
    }, []);

    return (
        <Switch>
            <Route exact path='/' component={Marketing} />
        </Switch>
    )
}

const mapStateToProps = () => {
    return {
    };
}

export default connect(mapStateToProps, undefined)(Routes);