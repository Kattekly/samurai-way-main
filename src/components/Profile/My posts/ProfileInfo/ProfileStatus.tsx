import React, {ChangeEvent} from 'react';


type ProfileStatusPropsType = {
    status: string
    updateStatusThunk: (status: string) => void
}

class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    diactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatusThunk(this.state.status)
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }


    render() {

        return (
            <div>
                {!this.state.editMode
                    ? <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                    : <div>
                        <input onChange={this.onStatusChange} onBlur={this.diactivateEditMode} autoFocus={true}
                               value={this.state.status}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;