import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileUserPropsType, setUserProfile} from "../../Redux/Profile-reducer";
import {ReduxStateType} from "../../Redux/Redux-Stor";
import {ProfilePageType} from "../../Redux/State";
import {RouteComponentProps, withRouter} from "react-router-dom";

type PathParamsType = {
    userId: string
}

type ProfileContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType

class ProfileContainer extends React.Component <PropsType, ProfilePageType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
            this.props.setUserProfile(response.data)
        })
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        );
    }

};

type mapStateToPropsType = {
    profile: ProfileUserPropsType
}

let mapStateToProps = (state: ReduxStateType): mapStateToPropsType => ({
    profile: state.messagePage.profile
})

type mapDispatchToPropsType = {
    setUserProfile: (profile: ProfileUserPropsType) => void
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);