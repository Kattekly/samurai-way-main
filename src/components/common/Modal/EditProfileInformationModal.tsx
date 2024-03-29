import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import s from "./ProfileInfoModal.module.css"
import ProfileDataForm from "../../Profile/My posts/ProfileInfo/ProfileDataForm";
import {ProfileUserPropsType} from "../../../Redux/profile-reducer";
import {InjectedFormProps} from "redux-form";

export type PropsType = {
    profile: ProfileUserPropsType
    onSubmit: (formData: ProfileUserPropsType) => void
}

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export const EditProfileInformationModal: React.FC<PropsType> = ({
                                                                     onSubmit,
                                                                     profile,

                                                                 }) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <button type="button" className={s.button} onClick={handleOpen}>
                Edit profile
            </button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title">My Information</h2>
                        <p id="transition-modal-description">

                            <ProfileDataForm profile={profile} initialValues={profile} onSubmit={onSubmit} /></p>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}