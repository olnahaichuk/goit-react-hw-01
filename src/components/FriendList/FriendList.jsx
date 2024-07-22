/* eslint-disable no-mixed-spaces-and-tabs */

import FriendListItem from "../FriendListItem/FriendListItem";
import Section from "../Section/Section"
import css from "./FriendList.module.css"

const FriendList = ({friends}) => {
  return (
    <Section  >
      <ul className={css.friendList}>
      {friends.map((friend) => (
        <li className={css.friendListItem} key={friend.id}>
		<FriendListItem
	      avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}/>
        </li>
        
      ))}
        </ul>
      </Section>
      
    
  );
};

export default FriendList;
