import React, {ChangeEvent} from 'react';


type ProfileStatusPropsType = {
    status: string
    updateStatusThunk: (status: string) => void
}

export const ProfileStatusWithHooks = (props: ProfileStatusPropsType) => {
    return (
        <div>
            {true
                ? <div>
                    <span onDoubleClick={activateEditMode}>{props.status || "no status"}</span>
                </div>

                : <div>
                    <input onChange={onStatusChange} onBlur={diactivateEditMode} autoFocus={true}
                           value={}/>
                </div>
            }
        </div>
    )
}
