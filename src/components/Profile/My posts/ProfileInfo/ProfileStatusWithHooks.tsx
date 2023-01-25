import React, {useState} from 'react';


type ProfileStatusPropsType = {
    status: string
    updateStatusThunk: (status: string) => void
}

export const ProfileStatusWithHooks = (props: ProfileStatusPropsType) => {

    let [editMode, setEditMode] = useState(true)

    return (
        <div>
            {!editMode &&
                <div>
                    <span>{props.status || "no status"}</span>
                </div>}

            {editMode && <div>
                <input autoFocus={true}/>
            </div>
            }
        </div>
    )
}
