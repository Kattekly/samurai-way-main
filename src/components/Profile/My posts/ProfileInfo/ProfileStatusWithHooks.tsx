import React, {useState} from 'react';


type ProfileStatusPropsType = {
    status: string
    updateStatusThunk: (status: string) => void
}

export const ProfileStatusWithHooks = (props: ProfileStatusPropsType) => {

    let [editMode, setEditMode] = useState(false) //данные хранятся на строне реакта

    const activateEditMode = () => {
        setEditMode(true)
    }

    const diactivateEditMode = () => {
        setEditMode(false)
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || "no status"}</span>
                </div>}

            {editMode && <div>
                <input autoFocus={true} onBlur={diactivateEditMode}/>
            </div>
            }
        </div>
    )
}
