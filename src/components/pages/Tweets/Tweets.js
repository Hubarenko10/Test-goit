import { BackLinkRef, LoadMoreButton } from "./TweetsStyled";
import { BsArrowLeft } from "react-icons/bs";
import { getUsers } from "api";
import { useEffect, useState } from "react";
import { CardList } from "components/CardList/CardList";

const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [visibleUsers, setVisibleUsers] = useState([]);

  useEffect(() => {
    async function getUserTweets() {
      try {
        const data = await getUsers();
        setUsers(data);
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
    setVisibleUsers((prevVisibleUsers) => [
      ...prevVisibleUsers,
      ...users.slice(prevVisibleUsers.length, prevVisibleUsers.length + 3),
    ]);
  };

  return (
    <>
      <BackLinkRef to="/">
        <BsArrowLeft />
        Go back
      </BackLinkRef>
      <CardList user={visibleUsers} />
      {visibleUsers.length < users.length && (
        <LoadMoreButton onClick={loadMore}>Load more</LoadMoreButton>
      )}
    </>
  );
};

export default Tweets;
