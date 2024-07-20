import css from "./FriendList.module.css";
import clsx from "clsx";

const FriendListItem = ({
    avatar,
    name,
    isOnline }) => {
    return (
        <div>
  <img src={avatar} alt="Avatar" width="88" />
  <p className={css.friendName}>{name}</p>
           <p className={clsx(css.status, {
        [css.online]: isOnline,
        [css.offline]: !isOnline,
      })}>
        {isOnline ? "Online" : "Offline"}
      </p>
</div>
    )
}
export default FriendListItem;