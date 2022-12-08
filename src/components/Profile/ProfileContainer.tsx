import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileThunk, ProfileUserPropsType} from "../../Redux/Profile-reducer";
import {ReduxStateType} from "../../Redux/Redux-Stor";
import {ProfilePageType} from "../../Redux/State";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import withAuthRedirect from "../../hoc/AuthRedirect";
import {compose} from "redux";

type PathParamsType = {
    userId: string
}

type mapDispatchToPropsType = {
    getProfileThunk: (userId: string) => void
}

type ProfileContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType

class ProfileContainer extends React.Component <PropsType, ProfilePageType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }

        this.props.getProfileThunk(userId)

        /*ProfileAPI.getProfile(userId).then(response => {
            this.props.setUserProfile(response.data)
        })*/
        /* axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {

         })*/
    }

    render() {

        /* if (!this.props.isAuth) return <Redirect to={'/login'}/>*/
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        );
    }

};

//хок
let AuthRedirectComponent = withAuthRedirect(ProfileContainer)
/*AuthRedirectComponent = connect(mapStateToPropsForRedirect)(AuthRedirectComponent)*/


export type mapStateToPropsType = {
    profile: ProfileUserPropsType
}

let mapStateToProps = (state: ReduxStateType): mapStateToPropsType => ({
    profile: state.messagePage.profile,
})

/*
let mapStateToPropsForRedirect = (state: ReduxStateType): mapStateToPropsType => ({
    isAuth: state.auth.isAuth
})
*/


// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)


export default compose<React.ComponentType>(
    connect(mapStateToProps, {getProfileThunk}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
