import React, {ChangeEvent, useState} from 'react';


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

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {

    }

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || "no status"}</span>
                </div>}

            {editMode && <div>
                <input autoFocus={true} onBlur={diactivateEditMode} onChange={onStatusChange}/>
            </div>
            }
        </div>
    )
}
