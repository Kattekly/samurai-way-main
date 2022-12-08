import React from 'react';


type ProfileStatusPropsType = {
    status: string
}

class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        editMode: false
    }

    activateEditMode = () => {
       alert('Yuuuuu')
    }

    render() {

        return (
            <div>
                {!this.state.editMode
                    ? <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                    : <div>
                        <input value={this.props.status}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;