import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {LearnMore, ProfileLearnPropsType} from "../../Profile/My posts/ProfileInfo/ProfileInfo";
import s from "./ProfileInfoModal.module.css"
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

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
        borderRadius: 15
    },
}));

export const ProfileInfoModal: React.FC<ProfileLearnPropsType> = ({profile}) => {
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
            <ErrorOutlineIcon color="disabled" fontSize="small" className={s.icon} onClick={handleOpen}/>
            <button type="button" className={s.button} onClick={handleOpen}>
                Learn more
            </button>
            <span className={s.log}>
                {`${document.body.scrollTop = document.documentElement.scrollTop = 0}`}
            </span>

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
                        <h2 id="transition-modal-title" className={s.title}>Detailed Information</h2>
                        <p id="transition-modal-description"><LearnMore profile={profile}/></p>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}