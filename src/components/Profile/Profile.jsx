import PropTypes from 'prop-types';
import s from "./profile.module.css"

const Profile = ({username, tag, location, avatar, views, followers, likes}) => {
    return (<div className={s.profile}>
    <div className={s.description}>
      <img
        src={avatar}
        alt="User avatar"
        className={s.avatar}
      />
      <p className={s.name}>{username}</p>
      <p className={s.tag}>{tag}</p>
      <p className={s.location}>{location}</p>
    </div>
  
    <ul className={s.stats}>
      <li className={s.list}>
        <span className={s.label}>Followers</span>
        <span className={s.quantity}>{followers}</span>
      </li>
      <li className={s.list}>
        <span className={s.label}>Views</span>
        <span className={s.quantity}>{views}</span>
      </li>
      <li className={s.list}>
        <span className={s.label}>Likes</span>
        <span className={s.quantity}>{likes}</span>
      </li>
    </ul>
  </div>
    );
}

export default Profile;

Profile.defaultProps = {
  username: "Petra Marica",
  tag: "@pmarica",
  location: "Salvador, Brasil",
  avatar: "https://cdn-icons-png.flaticon.com/512/1077/1077012.png",
  views: "2000",
  followers: "1000",
  likes: "3000",
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  views: PropTypes.number,
  followers: PropTypes.number,
  likes: PropTypes.number,
}
