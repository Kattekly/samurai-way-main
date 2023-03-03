import {ChangeEvent, FC} from "react";
import s from "./UserAvatar.module.css"
import {Avatar, IconButton, Tooltip} from "@material-ui/core";
import {Photo} from "@material-ui/icons";

type UserAvatarPropsType = {
    img: string
    size: number
    isOwner?: boolean
    savePhoto?: (photo: File) => void
}
export const UserAvatar: FC<UserAvatarPropsType> = ({img, size, isOwner, savePhoto}) => {
    const avatarSize = {
        width: `${size}px`,
        height: `${size}px`,
        border: `5px solid white`
    }

    const onChangeMainPhoto = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0)
            savePhoto?.(event.target.files[0])
    }
    return (
        <div className={s.container}>
            <Avatar src={img} style={avatarSize}/>
            {isOwner &&
                <IconButton className={s.button} component="label">
                    <Tooltip title='Change photo' arrow>
                        <Photo/>
                    </Tooltip>
                    <input
                        onChange={onChangeMainPhoto}
                        type="file"
                        hidden
                        accept="image/png, image/jpeg"
                    />
                </IconButton>
            }
        </div>
    )
}