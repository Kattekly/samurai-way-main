import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getProfileThunk,
    getStatusThunk,
    ProfileUserPropsType,
    savePhoto, saveProfile,
    updateStatusThunk
} from "../../Redux/profile-reducer";
import {ReduxStateType} from "../../Redux/redux-stor";
import {ProfilePageType} from "../../Redux/state";
import {RouteComponentProps, withRouter} from "react-router-dom";
import withAuthRedirect from "../../hoc/authRedirect";
import {compose} from "redux";

type PathParamsType = {
    userId: string
}

type DispatchToPropsType = {
    getProfileThunk: (userId: number) => void
    getStatusThunk: (userId: number) => void
    updateStatusThunk: (status: string) => void
    savePhoto: (file: any) => void
    saveProfile: (profile: ProfileUserPropsType) => Promise<any>
}
type MapPropsType = ReturnType<typeof mapStateToProps>


type PropsType = MapPropsType & DispatchToPropsType & RouteComponentProps<PathParamsType>



class ProfileContainer extends React.Component <PropsType> {

    refreshProfile() {
     /*   let userId = this.props.match.params.userId
        if (!userId) {
            userId = '26538'
        }

        this.props.getProfileThunk(userId)
        this.props.getStatusThunk(userId)

    }*/
        let userId: number | null = +this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push("/login");
            }
        }

        if (!userId) {
            console.error("ID should exists in URI params or in state ('authorizedUserId')");
        } else {
            this.props.getProfileThunk(userId)
            this.props.getStatusThunk(userId)
        }
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

let mapStateToProps = (state: ReduxStateType) => ({
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