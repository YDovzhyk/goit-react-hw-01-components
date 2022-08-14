import PropTypes from 'prop-types';
import s from "./friendList.module.css"

import FriendsListGroup from "./FriendsListGroup.jsx";

const FriendsList = ({friends}) => {
    console.log(friends);
    const elements = friends.map(({id, ...props}) => <FriendsListGroup key={id} {...props} />);

    return (<ul className={s.friendList}>
        {elements}
    </ul>
    );
}

export default FriendsList;

FriendsList.defaultProps = {
    friends: []
}
FriendsList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired,
        }))
    }
