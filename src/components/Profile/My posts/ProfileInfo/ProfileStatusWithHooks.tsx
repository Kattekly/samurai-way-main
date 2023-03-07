import React, {ChangeEvent, useEffect, useState} from 'react';


type ProfileStatusPropsType = {
    status: string
    updateStatusThunk: (status: string) => void
}

export const ProfileStatusWithHooks = (props: ProfileStatusPropsType) => {

    let [editMode, setEditMode] = useState(false) //данные хранятся на строне реакта
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]) //синхронизация пропсов и стейта

    const activateEditMode = () => {
        setEditMode(true)
    }

    const diactivateEditMode = () => {
        if (status.length < 100) {
            setEditMode(false)
            props.updateStatusThunk(status) //отправить родителю, чтобы данные сохранились в бизнесе
        } else {
            return alert('Status must be less than 100 characters')
        }
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || "no status"}</span>
                </div>}

            {editMode && <div>
                <input autoFocus={true} onBlur={diactivateEditMode} onChange={onStatusChange} value={status}/>
            </div>
            }
        </div>
    )
}
