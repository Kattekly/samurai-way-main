import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileThunk, getStatusThunk, ProfileUserPropsType, updateStatusThunk} from "../../Redux/Profile-reducer";
import {ReduxStateType} from "../../Redux/Redux-Stor";
import {ProfilePageType} from "../../Redux/State";
import {RouteComponentProps, withRouter} from "react-router-dom";
import withAuthRedirect from "../../hoc/AuthRedirect";
import {compose} from "redux";

type PathParamsType = {
    userId: string
}

type mapDispatchToPropsType = {
    getProfileThunk: (userId: string) => void
    getStatusThunk: (userId: string) => void
    updateStatusThunk: (status: string) => void
}

type ProfileContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType

class ProfileContainer extends React.Component <PropsType, ProfilePageType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '26538'
        }

        this.props.getProfileThunk(userId)
        this.props.getStatusThunk(userId)

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
                <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatusThunk={this.props.updateStatusThunk}/>
            </div>
        );
    }

};

//хок
let AuthRedirectComponent = withAuthRedirect(ProfileContainer)
/*AuthRedirectComponent = connect(mapStateToPropsForRedirect)(AuthRedirectComponent)*/


export type mapStateToPropsType = {
    profile: ProfileUserPropsType
    status: string
}

let mapStateToProps = (state: ReduxStateType): mapStateToPropsType => ({
    profile: state.messagePage.profile,
    status: state.messagePage.status
})

/*
let mapStateToPropsForRedirect = (state: ReduxStateType): mapStateToPropsType => ({
    isAuth: state.auth.isAuth
})
*/


// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)


export default compose<React.ComponentType>(
    connect(mapStateToProps, {getProfileThunk, getStatusThunk, updateStatusThunk}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
