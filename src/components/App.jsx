import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import FriendList from "./FriendList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";

import friends from "../data/friends.json";
import userData from "../data/user.json";
import statData from "../data/data.json";
import transactions from "../data/transactions.json";


export const App = () => {
  return (
    <div>
    <Profile
      username={userData[0].username}
      tag={userData[0].tag}
      location={userData[0].location}
      avatar={userData[0].avatar}
      views={userData[0].stats.views}
      followers={userData[0].stats.followers}
      likes={userData[0].stats.likes}
    />

    <Statistics title="Upload stats" stats={statData} 
    />
    <Statistics stats={statData} 
    />

    <FriendList friends={friends} />

    <TransactionHistory items={transactions} />

    </div>
  );
};
