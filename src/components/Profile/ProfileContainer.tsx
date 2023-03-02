import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getProfileThunk,
    getStatusThunk,
    ProfileUserPropsType,
    savePhoto, saveProfile,
    updateStatusThunk
} from "../../Redux/Profile-reducer";
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
    savePhoto: (file: any) => void
    saveProfile: (profile: ProfileUserPropsType) => Promise<any>
}

type ProfileContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType

class ProfileContainer extends React.Component <PropsType, ProfilePageType> {

    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '26538'
        }

        this.props.getProfileThunk(userId)
        this.props.getStatusThunk(userId)

    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<ProfilePageType>, snapshot?: any) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <div>
                <Profile {...this.props} isOwner={!this.props.match.params.userId}
                         profile={this.props.profile} status={this.props.status}
                         updateStatusThunk={this.props.updateStatusThunk}
                         savePhoto={this.props.savePhoto}/>
            </div>
        );
    }

};

//хок
let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

export type mapStateToPropsType = {
    profile: ProfileUserPropsType
    status: string
    authorizedUserId: string | null
    isAuth: boolean
}

let mapStateToProps = (state: ReduxStateType): mapStateToPropsType => ({
    profile: state.messagePage.profile,
    status: state.messagePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth

})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getProfileThunk, getStatusThunk, updateStatusThunk, savePhoto, saveProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)