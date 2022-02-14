import s from "./NotificationTitle.module.css"
const Notification = ({ message }) => {
    return (
        <b className={s.title}>{message}</b>
    )
};
export default Notification;