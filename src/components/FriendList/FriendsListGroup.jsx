import PropTypes from 'prop-types';
import s from "./friendList.module.css"

const FriendsListGroup = ({avatar, name, isOnline}) => {
    function isUserOnline () {
        if (isOnline) {
            return '#19e016';
        } else {
            return '#df2b2b';
        }
    }
    return (<li className={s.item}>
    <span className={s.status} style={{backgroundColor: isUserOnline()}}></span>
    <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={s.name}>{name}</p>
    </li>);
}

export default FriendsListGroup;

FriendsListGroup.defaultProps = {};

FriendsListGroup.propTypes = {
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
}