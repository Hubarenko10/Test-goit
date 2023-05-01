import { BackLinkRef, LoadMoreButton } from "./TweetsStyled";
import { BsArrowLeft } from "react-icons/bs";
import { getUsers } from "api";
import { useEffect, useState } from "react";
import { CardList } from "components/CardList/CardList";


const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [visibleUsers, setVisibleUsers] = useState([]);
  const [filter] = useState("Show All");

  useEffect(() => {
    async function getUserTweets() {
      try {
        const data = await getUsers();
        const dataWithFollowingState = data.map((card) => ({
          ...card,
          following: false,
        }));
        setUsers(dataWithFollowingState);
      } catch (error) {
        console.log(error);
      }
    }
    getUserTweets();
  }, []);

  useEffect(() => {
    if (users.length > 0) {
      setVisibleUsers(users.slice(0, 3));
    }
  }, [users]);

  const loadMore = () => {
    setVisibleUsers((prevVisibleUsers) => {
      const remainingUsers = filter === "Show All"
        ? users.slice(prevVisibleUsers.length)
        : users.filter((user) => user[filter.toLowerCase()]).slice(prevVisibleUsers.length);
      return [...prevVisibleUsers, ...remainingUsers.slice(0, 3)];
    });
  };

  return (
    <>
      <BackLinkRef to="/">
        <BsArrowLeft />
        <span style={{marginLeft:10}}>Go back</span>
      </BackLinkRef>
      <CardList user={visibleUsers} />
      {visibleUsers.length < users.length && (
        <LoadMoreButton onClick={loadMore}>Load more</LoadMoreButton>
      )}
    </>
  );
};

export default Tweets;
