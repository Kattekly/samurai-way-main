import React, {ChangeEvent} from 'react';


type ProfileStatusPropsType = {
    status: string
    updateStatusThunk: (status: string) => void
}

export const ProfileStatusWithHooks = (props: ProfileStatusPropsType) => {
    return (
        <div>
            {<div>
                    <span>{props.status || "no status"} yo </span>
                </div>}

            { false && <div>
                    <input  autoFocus={true}/>
                </div>
            }
        </div>
    )
}
