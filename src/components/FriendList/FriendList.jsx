import PropTypes from 'prop-types';
import s from "./friendList.module.css"

import FriendListItem from "./FriendListItem.jsx";

const FriendsList = ({friends}) => {
    const elements = friends.map(({id, ...props}) => <FriendListItem key={id} {...props} />);

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
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired,
        }))
    }
