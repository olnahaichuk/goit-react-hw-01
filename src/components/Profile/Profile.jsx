import css from "./Profile.module.css"


const Profile = ({name, tag, location, image, stats}) => {
  return (

        <div className={css.userCard}>
        <div>
    <img className={css.userImage}
      src={image}
            alt="User avatar"
            
    />
    <p className={css.userName}>{name}</p>
    <p className={css.userInfo}>@{tag}</p>
    <p  className={css.userInfo}>{location}</p>
  </div>

  <ul className={css.userSocial}>
    <li className={css.userSocialItems}>
      <span className={css.socialItem}>Followers</span>
     <span>{stats.followers}</span>
    </li>
    <li className={css.userSocialItems}>
      <span  className={css.socialItem}>Views</span>
      <span>{stats.views}</span>
    </li>
    <li className={css.userSocialItems}>
      <span  className={css.socialItem}>Likes</span>
      <span>{stats.likes}</span>
    </li>
  </ul>
</div>
    )
}
export default Profile;