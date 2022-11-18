import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileUserPropsType, setUserProfile} from "../../Redux/Profile-reducer";
import {ReduxStateType} from "../../Redux/Redux-Stor";
import {ProfilePageType} from "../../Redux/State";

type ProfileContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

class ProfileContainer extends React.Component <ProfileContainerPropsType, ProfilePageType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
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

let mapStateToProps = (state: ReduxStateType) => ({
    profile: state.messagePage.profile
})

type mapDispatchToPropsType = {
    setUserProfile: (profile: null) => void
}

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);